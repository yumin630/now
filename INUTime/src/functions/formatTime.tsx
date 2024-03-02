export function formatTime(timeStr) {
  // 주어진 문자열을 Date 객체로 변환
  var dateTimeObj = new Date(timeStr);

  // 시간을 AM/PM 형식으로 포맷팅
  var options = { hour: 'numeric', minute: 'numeric', hour12: true };
  var ampmTime = dateTimeObj.toLocaleTimeString('en-US', options);

  return ampmTime;
}
