import path from "path";
import fs from "fs";

export default defineEventHandler(async (event) => {
  console.log(event);

  const files = await readMultipartFormData(event);
  console.log(await readMultipartFormData(event));

  files?.forEach((file) => {
    const filePath = path.join(
      process.cwd(),
      "public",
      file.filename as string
    );
    console.log(filePath);
    fs.writeFileSync(filePath, file.data);
  });
  return 200;
});
