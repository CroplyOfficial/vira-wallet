import { Filesystem, Directory, Encoding } from "@capacitor/filesystem";

const writeFile = async (data: string, document: string) => {
  await Filesystem.writeFile({
    path: document,
    data: data,
    directory: Directory.Data,
    encoding: Encoding.UTF8,
  });
};

const readFile = async (document: string) => {
  const contents = await Filesystem.readFile({
    path: document,
    directory: Directory.Data,
    encoding: Encoding.UTF8,
  });
  return contents;
};

const deleteFile = async (document: string) => {
  await Filesystem.deleteFile({
    path: document,
    directory: Directory.Data,
  });
};

export { writeFile, deleteFile, readFile };
