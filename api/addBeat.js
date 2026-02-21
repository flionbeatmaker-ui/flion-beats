import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if(req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const beat = req.body;
  const filePath = path.join(process.cwd(), "beats.json");

  let beats = [];
  try{
    beats = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }catch(e){ beats = []; }

  beats.push(beat);

  fs.writeFileSync(filePath, JSON.stringify(beats, null, 2));

  res.status(200).json({ message: "Beat agregado" });
}