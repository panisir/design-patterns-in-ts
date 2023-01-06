function timeConversion(s: string): string {
  let result = "";
  const arr = s.split(":");
  let hour = Number.parseInt(arr[0], 10);

  if (hour === 12) {
    if (s.includes("PM")) {
      result = s.replace("PM", "");
    } else {
      arr[0] = "00";
      result = arr.join(":");
      result = result.replace("AM", "");
    }
  } else {
    if (s.includes("PM")) {
      hour = hour + 12;
      arr[0] = hour.toString();
      result = arr.join(":");
      result = result.replace("PM", "");
    } else {
      result = s.replace("AM", "");
    }
  }

  return result;
}
