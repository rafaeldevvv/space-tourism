import escapeRegExpStr from "./escapeRegExpStr";

interface Options {

}

export default function getIdFrom(
  string: string,
  {
    separator = "-",
    transform = "keep",
  }: { separator?: string; transform?: "keep" | "uppercase" | "lowercase" }
) {
  let id = string.replace(/\W/g, separator); // removes non-letter characters
  separator = escapeRegExpStr(separator);
  id = id.replace(new RegExp(`${separator}{2,}`, "g"), separator); // remove sequences of underscores

  switch (transform) {
    case "uppercase": {
      id = id.toUpperCase();
      break;
    }
    case "lowercase": {
      id = id.toLowerCase();
    }
  }

  return id;
}
