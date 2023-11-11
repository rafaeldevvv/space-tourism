export default function escapeRegExpStr(str: string) {
   return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}