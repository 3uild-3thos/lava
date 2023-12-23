export default function getInputTypes(seed) {
  switch (seed) {
    case "String":
      return "text";
    case "Pubkey":
      return "text";
    case "Bytes":
      return "text";
    case "u8":
      return "number";
    case "u16":
      return "number";
    case "u32":
      return "number";
    case "u64":
      return "number";
    case "u128":
      return "number";
    default:
      return "text";
  }
}