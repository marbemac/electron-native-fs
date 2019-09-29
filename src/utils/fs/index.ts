export interface NFSEntry {
  name: string;
  isFile: boolean;
  isDirectory: boolean;
  getEntries: () => Promise<NFSEntry[]>;
}

export type Entry = File | Directory;

export type File = {
  name: string;
  type: 'file';
};

export type Directory = {
  name: string;
  type: 'directory';
  children: Entry[];
};

export interface IFSAdapter {
  cwd: string;
  list(path?: string): Promise<Entry[] | undefined>;
  read(path: string): Promise<string | undefined>;
}

export const walkTree = async (entry: NFSEntry): Promise<Entry[]> => {
  const entries: Entry[] = [];

  const childEntries = await entry.getEntries();
  for await (const child of childEntries) {
    if (child.isFile) {
      entries.push({
        name: child.name,
        type: 'file',
      });
    } else {
      entries.push({
        name: child.name,
        type: 'directory',
        children: await walkTree(child),
      });
    }
  }

  return entries;
};

export function isFile(entry: Entry): entry is File {
  return entry.type === 'file';
}

export function isDirectory(entry: Entry): entry is Directory {
  return entry.type === 'directory';
}
