import type { JSX } from "react";
import { useRouletteStore } from "../../../stores";
import { useTimerStore } from "../../../stores/use-timer-store.ts";

const pachinco_history = (
  <img
    draggable="false"
    width="68.18181818181817%"
    height="93.75%"
    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNDYgNDYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGN4PSI1MCUiIGN5PSI1MCUiIGZ4PSI1MCUiIGZ5PSI1MCUiIHI9IjU0LjY3OSUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLjk5MiAwIC4wMDMpIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgb2Zmc2V0PSIyLjg1NCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRkZGRENGIiBvZmZzZXQ9IjI0LjY2JSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9IiNGM0M5MzYiIG9mZnNldD0iNzIuMzklIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0RFQTUyQSIgb2Zmc2V0PSI4OC4zNSUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRDI5MDIzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTUuNjYlIiB5MT0iOTkuNjklIiB4Mj0iNDQuMzQlIiB5Mj0iLjMxNCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlDODY4IiBvZmZzZXQ9IjIwLjQ2NyUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRkZFQjhCIiBvZmZzZXQ9IjQxLjIzOCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0yMi45ODkgMS40NzhjLTExLjc3NC4wMDUtMjEuMzU4IDkuNDcxLTIxLjUwOSAyMS4yNDUtLjE1MSAxMS43NzMgOS4xODYgMjEuNDgyIDIwLjk1NiAyMS43OTEuMTkyLjAwNS4zODMuMDA3LjU3NC4wMDcgMTEuNzc0LS4wMDUgMjEuMzU4LTkuNDcyIDIxLjUwOS0yMS4yNDUuMTUxLTExLjc3My05LjE4NS0yMS40ODItMjAuOTU2LTIxLjc5MWEyMS45NjQgMjEuOTY0IDAgMDAtLjU3NC0uMDA3eiIgZmlsbD0idXJsKCNhKSI+PC9wYXRoPjxwYXRoIGQ9Ik02LjA5NyA2LjcxOGExOS45ODggMTkuOTg4IDAgMDExMC42OTktNS43MDJjLTIuMTUzIDMuNDQxLTUuODQ0IDExLjY5MiAyLjI4OCAxOC43OTFDMTUuMjUyIDE4LjM5NyA2Ljg5NiAxNC40NTggNi4wOTcgNi43MTh6TTE5LjQyNiAyMS4wNDNDMTUuOTM5IDE5Ljg4MyA2LjYzNiAxNi4wNDIgNS4xODEgNy43MThhMTkuOTg3IDE5Ljk4NyAwIDAwLTMuODE2IDYuNzg5YzMuMzkzIDYuMTc0IDEyLjA4OCA4LjM2NSAxOC4wNjEgNi41MzV6bS4yMDEuNjczQzEyLjc4NiAzMC4yOTggNC42OTggMjcuMzE1Ljg1MCAyNS4wOTlhMjAuMDE1IDIwLjAxNSAwIDAwNS41NTYgOS45NzdjOC4wMDEtLjgzMyAxMS45MzktOS43MjcgMTMuMjIwLTEzLjM1OXpNNy40MDcgMzUuOTg5YTIwLjA0NyAyMC4wNDcgMCAwMDYuMDM5IDMuNTU5YzYuMTg0LTMuMDkwIDguNTg0LTExLjM4MCA3LjE2MC0xNy40MzMtMS4yOTggMy43MzMtNS4xNTcgMTIuNDY3LTEzLjE5OSAxMy44NzN6TTMzLjQ1MiA1LjQ5MmEyMC4wNDggMjAuMDQ4IDAgMDAtNi4wMzktMy41NTljLTYuMTg1IDMuMDkwLTguNTg0IDExLjM4MC03LjE2MCAxNy40MzMgMS4yOTgtMy43MzMgNS4xNTctMTIuNDY3IDEzLjItMTMuODczek0yMS43NzcgMjEuNjc4YzguMTMzIDcuMDk4IDQuNDM4IDE1LjM0NiAyLjI4OCAxOC43ODdBMTkuOTkxIDE5Ljk5MSAwIDAwMzQuNzYyIDM0Ljc2NGMtLjgwMi03LjczMy05LjE1MC0xMS42NzUtMTIuOTg0LTEzLjA4NXptMTguMjMyLTUuMjk1YTIwLjAxNiAyMC4wMTYgMCAwMC01LjU1Ni05Ljk3N2MtNy45OTQuODMwLTExLjkzNSA5LjcyMy0xMy4yMjAgMTMuMzU5IDYuODQxLTguNTgxIDE0LjkyOS01LjU5OCAxOC43NzctMy4zODJ6TTIxLjQzMyAyMC40MzljMy40ODYgMS4xNTkgMTIuNzkwIDUuMDAwIDE0LjI0NSAxMy4zMjVhMTkuOTkxIDE5Ljk5MSAwIDAwMy44MTYtNi43ODljLTMuMzkzLTYuMTc0LTEyLjA4OC04LjM2NS0xOC4wNjEtNi41MzV6IiBmaWxsPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjU3IDIuMjU5KSI+PC9wYXRoPjxwYXRoIGQ9Ik00My4wNTUgMjNhMTkuOTk1IDE5Ljk5NSAwIDAxLS45ODkgNi4yMzNjLTMuMzkyLTYuMTc0LTEyLjA4OC04LjM2NS0xOC4wNjEtNi41MzUgMy40ODYgMS4xNTkgMTIuNzkwIDUuMDAwIDE0LjI0NSAxMy4zMjVhMjAuODQ3IDIwLjg0NyAwIDAxLS45MTYgMS4wMDBjLS44MDItNy43MzMtOS4xNTAtMTEuNjc1LTEyLjk4NC0xMy4wODUgOC4xMzMgNy4wOTggNC40MzggMTUuMzQ2IDIuMjg4IDE4Ljc4N2EyMC4xODkgMjAuMTg5IDAgMDEtMTAuNjE5LS45MTZjNi4xODUtMy4wOTAgOC41ODQtMTEuMzgwIDcuMTYwLTE3LjQzMy0xLjI5OCAzLjczMy01LjE1NyAxMi40NjctMTMuMiAxMy44NzNhMjIuNzU5IDIyLjc1OSAwIDAxLTEtLjkxM2M4LjAwMS0uODMzIDExLjkzOS05LjcyNyAxMy4yMjAtMTMuMzU5LTYuODQxIDguNTgxLTE0LjkyOSA1LjU5OC0xOC43NzcgMy4zODJhMjAuMTU2IDIwLjE1NiAwIDAxLjUxNC0xMC41OTJjMy4zOTIgNi4xNzQgMTIuMDg4IDguMzY1IDE4LjA2MSA2LjUzNS0zLjQ4Ni0xLjE1OS0xMi43OS01LjAwMC0xNC4yNDUtMTMuMzI0LjI5NS0uMzQzLjYwMC0uNjc3LjkxNi0xLjAwMC43OTggNy43NDAgOS4xNTQgMTEuNjc5IDEyLjk4OCAxMy4wODgtOC4xMzMtNy4wOTgtNC40NDEtMTUuMzQ5LTIuMjg4LTE4Ljc5MWEyMC4xNzYgMjAuMTc2IDAgMDExMC42MTYuOTE2Yy02LjE4NSAzLjA5MC04LjU4NCAxMS4zODAtNy4xNjAgMTcuNDMzIDEuMjk4LTMuNzMzIDUuMTU3LTEyLjQ2NyAxMy4yLTEzLjg3My4zNDMuMjk1LjY3Ny42MDAgMS4wMDAuOTEzLTcuOTk0LjgzMC0xMS45MzUgOS43MjMtMTMuMjIwIDEzLjM1OSA2Ljg0MS04LjU4MSAxNC45MjktNS41OTggMTguNzc3LTMuMzgyQTIwLjAyNSAyMC4wMjUgMCAwMTQzLjA1NSAyM3oiIGZpbGw9IiNDMTM5RTIiPjwvcGF0aD48cGF0aCBkPSJNMjYuNDcyIDMzLjAzOWMtMTAuMzg3LS4wMDItMTkuNDk4LTYuOTMxLTIyLjI3NC0xNi45NDAtMi41OTYgNy4xNDYtLjkyNyAxNS4xNDcgNC4zMDkgMjAuNjYwIDUuMjM2IDUuNTEzIDEzLjE0MCA3LjU5MSAyMC40MTEgNS4zNjUgNy4yNzAtMi4yMjUgMTIuNjU4LTguMzcwIDEzLjkxMi0xNS44NzBhMjMuMDQxIDIzLjA0MSAwIDAxLTE2LjM1OCA2Ljc4NXoiIGZpbGw9IiNGN0QwRDAiIG9wYWNpdHk9Ii43IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OyI+PC9wYXRoPjxwYXRoIGQ9Ik00LjMzMCAyMi4xNjNjMCAxLjk4NyAxLjE1NiA0LjkzNiAyLjgwOCAzLjU4OSAyLjI0NC0xLjgyOS0uNzY1LTYuMTEyIDQuNTk3LTExLjk3OCA3LjQwOC04LjEwMyAxNS40NTgtNC4wODkgMTUuNDU4LTcuMDAwIDAtMS4yMjYtMS41NTgtMi43OTctMy45MTktMi43OTctNC45MzIgMC0xOC45NDQgNC4yNDItMTguOTQ0IDE4LjE4N3pNMzQuMTk0IDExLjU3NGMtLjg3NS0uNDY2LTQuOTIxLTEuNTM5LTQuOTIxLTMuMTgyIDAtMS4wNDYgMS42NzktMi4wOTMgMy4wNTItMi4wOTMgMi4xNDkgMCA1LjY1NyAzLjk3MSA1LjY1NyA1LjYzMiAwIC40MzgtLjI0Mi43MTMtLjgwNS43MTMtLjU5OSAwLTEuNTYxLS4zMTEtMi45ODMtMS4wNjh6IiBmaWxsPSIjRkZGIiBvcGFjaXR5PSIuNiI+PC9wYXRoPjwvZz48L3N2Zz4K"
  />
);
const crazy_time_history = (
  <img
    draggable="false"
    width="69.6969696969697%"
    height="95.83333333333334%"
    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MSA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjgyLjExNSUiIHkxPSI1MC4zMDUlIiB4Mj0iMTcuODczJSIgeTI9IjQ5Ljc3MSUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRjdEQTY5IiBvZmZzZXQ9IjAlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0YzQzkzNiIgb2Zmc2V0PSIyNy42MTclIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0REQTMyOSIgb2Zmc2V0PSI0OS45NjQlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0NBODQxRiIgb2Zmc2V0PSI3Mi4wNTglIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0MzNzgxQiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjQxLjgyMiUiIHkxPSI0OS44OTUlIiB4Mj0iNTguMzIwJSIgeTI9IjUwLjEwMyUiIGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjRkRDNTJFIiBvZmZzZXQ9IjAlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0UxOTQyNCIgb2Zmc2V0PSI0Mi4zNzUlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0ZEQzYyRSIgb2Zmc2V0PSI0OS43MTglIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0ZEQ0IzQSIgb2Zmc2V0PSI1MS4xNjklIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0ZFREE1OSIgb2Zmc2V0PSI1My43NjYlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0ZFRTc3NSIgb2Zmc2V0PSI1NS43NTElIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0U0OTkyNSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjQ0LjI1OSUiIHkxPSI0Ny4zMzclIiB4Mj0iNjAuOTE2JSIgeTI9IjU1LjAxOSUiIGlkPSJjIj48c3RvcCBzdG9wLWNvbG9yPSIjRTlDODY4IiBvZmZzZXQ9IjIwLjQ2NyUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRkZFQjhCIiBvZmZzZXQ9IjQxLjIzOCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRkZFRkEzIiBvZmZzZXQ9IjUzLjI3JSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9IiNFOUM4NjgiIG9mZnNldD0iMTAwJSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI0OS43MzklIiB5MT0iNDkuOTgwJSIgeDI9IjUwLjI1OSUiIHkyPSI1MC4wMTclIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZFRTc3NSIgb2Zmc2V0PSIxMi43MTklIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0ZFREE1OSIgb2Zmc2V0PSIyNy42MjclIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0ZEQ0IzQSIgb2Zmc2V0PSI0Ny4xNDElIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0ZEQzYyRSIgb2Zmc2V0PSI1OC4wMzklIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0UxOTQyNCIgb2Zmc2V0PSI5OS42NDQlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUwLjA3OCUiIHkxPSItLjA2MSUiIHgyPSI0OS45MjElIiB5Mj0iMTAwLjA1NiUiIGlkPSJlIj48c3RvcCBzdG9wLWNvbG9yPSIjOUU2NjE1IiBvZmZzZXQ9IjE2Ljg0NiUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRTU5QzI2IiBvZmZzZXQ9IjMyLjkxNyUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRTE5NDI0IiBvZmZzZXQ9IjQ3LjY0MSUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjQTA2ODE0IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik00MS42MzkgOC42OTdsMS41ODQgMS41OTFhMS4yMDcgMS4yMDcgMCAwMS4xMjAgMS41NjJsLS4xMjQuMTQ0LS44MjkuODI1IDEuMTU3IDEuMjYzLjk1Mi45NTZhLjMwNi4zMDYgMCAwMS4wNTYuMzU0bC0uMDU3LjA3OS0uMjA3LjIwNmEuNjEzLjYxMyAwIDAwLS4wODAuNzcwbC4wNzguMDk2LjcyLjcyM2EuNjEzLjYxMyAwIDAwLjc3MS4wODBsLjA5Ni0uMDc4LjIwNy0uMjA2YS4zMDYuMzA2IDAgMDEuMzU0LS4wNTZsLjA3OS4wNTcuNzAwLjcwM2MuMzE4LjMyLjM1My44MTUuMTAzIDEuMTczbC0uMTA2LjEyNy0xLjA0NyAxLjA0M2EuMzA2LjMwNiAwIDAxLS4zNTQuMDU2bC0uMDc5LS4wNTctLjE2NC0uMTY1YS42MTMuNjEzIDAgMDAtLjc3MC0uMDgwbC0uMDk2LjA3OC0uNzIzLjcyYS42MTMuNjEzIDAgMDAtLjA4MC43NzBsLjA3OC4wOTYuMTY0LjE2NWEuMzA2LjMwNiAwIDAxLjA1Ni4zNTRsLS4wNTcuMDc5LTEuMDQ3IDEuMDQzYy0uMzIuMzE4LS44MTUuMzUzLTEuMTczLjEwM2wtLjEyNy0uMTA2LS43MjktLjczMmEuMjY1LjI2NSAwIDAxLS4wNDktLjMwNmwuMDQ5LS4wNjguMjE3LS4yMTZhLjYxMy42MTMgMCAwMC4wODAtLjc3MGwtLjA3OC0uMDk2LS43Mi0uNzIzYS42MTMuNjEzIDAgMDAtLjc3MS0uMDgwbC0uMDk2LjA3OC0uMjE3LjIxNmEuMjY1LjI2NSAwIDAxLS4zMDYuMDQ5bC0uMDY4LS4wNDktLjk4MS0uOTg1LTEuMTU4LTEuMjYyLTEuNTU0IDEuNTQ4LjM1OC4zNjJhLjQyNi40MjYgMCAwMS0uMDAxLjYwM2wtMS44NTQgMS44NDZhLjQyNi40MjYgMCAwMS0uNjAzLS4wMDFsLS4zNTgtLjM2Mi0xMS43NTUgMTEuNzA1YTEuMjQyIDEuMjQyIDAgMDAtLjI3NyAxLjMzNGwuMDgwLjE2NmMyLjEwMiAzLjYzMCAxLjkzNyA3LjY0MC0uNDExIDkuOTc5LTIuOTM2IDIuOTIzLTguMzQwIDIuMzE2LTEyLjIyNC0xLjMwNWwtLjM0OS0uMzM4YTExLjY0NiAxMS42NDYgMCAwMS0zLjM5Ni02LjU5MmMtLjMxMi0yLjM5MC4zMjktNC41MTYgMS44MDctNS45ODggMi4zNDktMi4zMzggNi4zNjAtMi40ODcgOS45ODEtLjM2OS40MzIuMjUyLjk2Ny4yMTkgMS4zNjEtLjA3MGwuMTQwLS4xMjAgMTEuNzU1LTExLjcwNS0uMzYwLS4zNjBhLjQyNi40MjYgMCAwMS4wMDEtLjYwM2wxLjg1NC0xLjg0NmEuNDI2LjQyNiAwIDAxLjYwMy4wMDFsLjM2MC4zNjAgNy44MTEtNy43NzdjLjQyOS0uNDI2IDEuMDk4LS40NjQgMS41NjktLjExNGwuMTM3LjExOHpNMTUuMDA5IDM2LjQ5OWMuMDYwLTEuNTY2LS45NDktMi45NzMtMi40NTItMy40MTctMS41MDItLjQ0NC0zLjExNS4xODctMy45MTcgMS41MzMtLjc1MSAxLjI2Mi0uNjEgMi44NTIuMzIzIDMuOTU5bC4xOTcuMjE0LS4xOTguMjA5LjIwMy0uMjAzYTMuMzkyIDMuMzkyIDAgMDAyLjIyMS45OTVsLjMxNC4wMDIuMzA5LS4wMTAtLjAxMS4zMDlhMy4zOTYgMy4zOTYgMCAwMC45OTcgMi41NTFjMS4zMzggMS4zMzggMy41MDggMS4zMzggNC44NDYtLjAwMCAxLjMzOC0xLjMzOCAxLjMzOC0zLjUwOC0uMDAwLTQuODQ2YTMuMzkyIDMuMzkyIDAgMDAtMi4yMjEtLjk5NWwtLjMxNC0uMDAyLS4zMDkuMDEwLjAxMS0uMzA5eiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMTkuMTIwIDYuODA4bC4wMDItMS4wMjBhLjYxMy42MTMgMCAwMS42MTQtLjYxMmwuMjMzLjAwMGEuMzA2LjMwNiAwIDAwLjMwNy0uMzA2bC4wMDMtMS40NzhhLjkxOS45MTkgMCAwMC0uOTE3LS45MjFsLS45OTMtLjAwMmEuMzA2LjMwNiAwIDAwLS4zMDcuMzA2bC0uMDAwLjI5MmEuNjEzLjYxMyAwIDAxLS42MTQuNjEybC0xLjAyMC0uMDAyYS42MTMuNjEzIDAgMDEtLjYxMi0uNjE0bC4wMDAtLjI5M2EuMzA2LjMwNiAwIDAwLS4zMDYtLjMwN2wtMS4zNS0uMDAyLS4wMTYgNy42NTYgMS4zOTEuMDAzYS4yNjUuMjY1IDAgMDAuMjY2LS4yNjVsLjAwMC0uMzA2YS42MTMuNjEzIDAgMDEuNjE0LS42MTJsMS4wMjAuMDAyYS42MTMuNjEzIDAgMDEuNjEyLjYxNGwtLjAwMC4zMDZhLjI2NS4yNjUgMCAwMC4yNjQuMjY2bDEuMDM0LjAwMmEuOTIuOTIgMCAwMC45MjEtLjkxN2wuMDAzLTEuNDc4YS4zMDYuMzA2IDAgMDAtLjMwNi0uMzA3bC0uMjMzLS4wMDBhLjYxMy42MTMgMCAwMS0uNjEyLS42MTR6IiBmaWxsPSJ1cmwoI2EpIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAxNi43OTIgNDMuNjA2KSI+PC9wYXRoPjxwYXRoIGZpbGw9IiM5RTY2MTUiIGQ9Ik0zOC42MDAgMTguMDUxbDUuNDI1LTUuNDAyLTEuMzE2LTEuNDMzLTUuNDI1IDUuNDAyeiI+PC9wYXRoPjxwYXRoIGQ9Ik0uMjg4IDQwLjgwMkMuMjc5IDQ0LjkyNCA0LjYzNiA0OC4yNzQgMTAuMDIgNDguMjg2YzUuMzgzLjAxMSA5Ljc1NC0zLjMyIDkuNzYzLTcuNDQxLjAwNy0zLjI2OC0yLjczMi02LjA1MC02LjU1MS03LjA2OGExLjUyOSAxLjUyOSAwIDAxLTEuMTM2LTEuNDgwbC4wNjYtMzEuMDgxYS45MTguOTE4IDAgMDAtLjkxNi0uOTIwTDkuMDAwLjI4OGEuOTE4LjkxOCAwIDAwLS45MjAuOTE2TDguMDEzIDMyLjI4N2ExLjUyOSAxLjUyOSAwIDAxLTEuMTQzIDEuNDc1QzMuMDQ2IDM0Ljc2My4yOTUgMzcuNTM0LjI4OCA0MC44MDJ6bTcuMDQwLTMuNzAwYTMuNzAxIDMuNzAxIDAgMDEyLjcxMiAxLjE5MCAzLjcxNSAzLjcxNSAwIDExLS4wMTAgNS4wNjBjLTEuMTU5IDEuMjM5LTMuMDEyIDEuNTM0LTQuNDk5LjcxNy0xLjQ4Ny0uODE3LTIuMjMxLTIuNTM5LTEuODA3LTQuMTgyLjQyNC0xLjY0MyAxLjkwOC0yLjc5MCAzLjYwNS0yLjc4NXoiIGZpbGw9InVybCgjYikiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2Ljc5MiA0My42MDYpIj48L3BhdGg+PHBhdGggZD0iTTguOTk4LjI4OGguMDAybDIuMjQ1LjAwNGEuOTE4LjkxOCAwIDAxLjkxNi45MjBsLS4wNjYgMzEuMDgxYTEuNTI5IDEuNTI5IDAgMDAxLjEzNiAxLjQ4MGMzLjgxOSAxLjAxNyA2LjU1OCAzLjgwMCA2LjU1MSA3LjA2OC0uMDA4IDQuMTE0LTQuMzY1IDcuNDQxLTkuNzM1IDcuNDQxaC0uMDI4QzQuNjM2IDQ4LjI3NC4yNzkgNDQuOTI0LjI4OCA0MC44MDJjLjAwNy0zLjI2OCAyLjc1OC02LjAzOSA2LjU4MS03LjA0MGExLjUyOSAxLjUyOSAwIDAwMS4xNDItMS40NzVMOC4wNzkgMS4yMDVhLjkxOC45MTggMCAwMS45MTgtLjkxNk03LjMyMSA0NC41MzNhMy43MDEgMy43MDEgMCAwMDIuNzA5LTEuMTc5IDMuNzAxIDMuNzAxIDAgMDAyLjcxMiAxLjE5MGguMDA4YzIuMDUtLjAwMCAzLjcxMS0xLjY2MSAzLjcxNC0zLjcxMS4wMDItMi4wNS0xLjY1Ni0zLjcxNC0zLjcwNi0zLjcxOWgtLjAwOGEzLjcwMSAzLjcwMSAwIDAwLTIuNzA5IDEuMTc5IDMuNzAxIDMuNzAxIDAgMDAtMi43MTItMS4xOTBoLS4wMDhjLTIuMDQ5LjAwMC0zLjcxMSAxLjY2MS0zLjcxNCAzLjcxMS0uMDAyIDIuMDUgMS42NTYgMy43MTQgMy43MDYgMy43MTloLjAwOE05LjAwMSAwaC0uMDAyYy0uNjY1LjAwMS0xLjIwNC41MzktMS4yMDcgMS4yMDRsLS4wNjYgMzEuMDgxYTEuMjQyIDEuMjQyIDAgMDEtLjkyNyAxLjE5N0MyLjczOCAzNC41NDYuMDA3IDM3LjQ4NyAwIDQwLjgwMmMtLjAwNCAyLjA4NSAxLjA0NSA0LjA0MiAyLjk1NiA1LjUxMmExMS42NDYgMTEuNjQ2IDAgMDA3LjA2MyAyLjI2MGguMDI4YzUuNTE4IDAgMTAuMDE0LTMuNDY3IDEwLjAyNC03LjcyOS4wMDctMy4zMTQtMi43MTEtNi4yNjctNi43NjUtNy4zNDdhMS4yNDIgMS4yNDIgMCAwMS0uOTIyLTEuMjAxbC4wNjYtMzEuMDgxQTEuMjA3IDEuMjA3IDAgMDAxMS4yNDYuMDA0TDkuMDAwIDB6TTcuMzIxIDQ0LjUzM2wtLjAwNy0uMjg4Yy0xLjU2Ny0uMDAwLTIuOTM0LTEuMDY0LTMuMzE5LTIuNTgzLS4zODUtMS41MTkuMzA4LTMuMTA2IDEuNjg1LTMuODU0IDEuMzc3LS43NDggMy4wODYtLjQ2NyA0LjE1MC42ODJsLjIxMC4yMjYuMjExLS4yMjVhMy4zOTIgMy4zOTIgMCAwMTIuNDk5LTEuMDg3YzEuODkyIDAgMy40MjcgMS41MzQgMy40MjcgMy40MjYgMCAxLjg5Mi0xLjUzNCAzLjQyNy0zLjQyNiAzLjQyN2EzLjM5NSAzLjM5NSAwIDAxLTIuNTA5LTEuMDk4bC0uMjEwLS4yMjYtLjIxMS4yMjVhMy4zOTIgMy4zOTIgMCAwMS0yLjQ5OSAxLjA4N3YuMjg4eiIgZmlsbD0idXJsKCNjKSIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTYuNzkyIDQzLjYwNikiPjwvcGF0aD48cGF0aCBkPSJNOS4zMjcgMTQuNTI3bDEuNTMxLjAwMy0uMDQ1IDIxLjIwNmEuNzY1Ljc2NSAwIDAxLTEuNTMxLS4wMDNMOS4zMjcgMTQuNTI4eiIgZmlsbD0idXJsKCNkKSIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTYuNzkyIDQzLjYwNikiPjwvcGF0aD48cGF0aCBkPSJNOC43ODUgMTAuNzAxaDIuNjE3Yy4yMzUgMCAuNDI2LjE5MS40MjYuNDI2djUuNjc5YS40MjYuNDI2IDAgMDEtLjQyNi40MjZIOC43ODVhLjQyNi40MjYgMCAwMS0uNDI2LS40MjZ2LTUuNjc5YS40MjYuNDI2IDAgMDEuNDI2LS40MjZ6IiBmaWxsPSJ1cmwoI2UpIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDQuODc3IDI2LjMyOCAtMTEuODEwKSI+PC9wYXRoPjwvZz48L3N2Zz4K"
  />
);

const cash_hunt_history = (
  <img
    draggable="false"
    width="68.18181818181817%"
    height="93.75%"
    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNDkiIHZpZXdCb3g9IjAgMCA1MCA0OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjEwMCUiIHgyPSI1MCUiIHkyPSIwJSIgaWQ9InMiPjxzdG9wIHN0b3AtY29sb3I9IiMzNTEyMDIiIG9mZnNldD0iLjAzNiUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjNUYzQzBBIiBvZmZzZXQ9IjU2LjkzNiUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjNzc0RjI3IiBvZmZzZXQ9Ijk2LjQ1OSUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9IjAlIiBpZD0iYyI+PHN0b3Agc3RvcC1jb2xvcj0iI0U5Qzg2OCIgb2Zmc2V0PSIwJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9IiNEQUIyNTUiIG9mZnNldD0iMjguMDIzJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9IiNDNjkzMzkiIG9mZnNldD0iNzQuMjE1JSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9IiNCRTg3MkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIxMDAlIiB4Mj0iNTAlIiB5Mj0iMCUiIGlkPSJkIj48c3RvcCBzdG9wLWNvbG9yPSIjQkU4NzJGIiBvZmZzZXQ9IjAlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0M2OTMzOSIgb2Zmc2V0PSIyNS43ODUlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0RBQjI1NSIgb2Zmc2V0PSI3MS45NzclIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0iI0U5Qzg2OCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNTAlIiB4Mj0iMTAwJSIgeTI9IjUwJSIgaWQ9ImUiPjxzdG9wIHN0b3AtY29sb3I9IiNCRTg3MkYiIG9mZnNldD0iMCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjQzY5MzM5IiBvZmZzZXQ9IjI1Ljc4NSUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjREFCMjU1IiBvZmZzZXQ9IjcxLjk3NyUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRTlDODY4IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSI1MCUiIHgyPSIxMDAlIiB5Mj0iNTAlIiBpZD0iZiI+PHN0b3Agc3RvcC1jb2xvcj0iI0U5Qzg2OCIgb2Zmc2V0PSIwJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9IiNEQUIyNTUiIG9mZnNldD0iMjguMDIzJSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9IiNDNjkzMzkiIG9mZnNldD0iNzQuMjE1JSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9IiNCRTg3MkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4zODUgMS4zODEpIj48cGF0aCBkPSJNMjIuNzYzLjI2MmMtOS4wODggMC0xNy4yODEgNS40NzQtMjAuNzU5IDEzLjg3MC0zLjQ3NyA4LjM5Ni0xLjU1NSAxOC4wNjAgNC44NzAgMjQuNDg3IDYuNDI2IDYuNDI2IDE2LjA5MCA4LjM0OCAyNC40ODcgNC44NzAgOC4zOTYtMy40NzcgMTMuODcwLTExLjY3MSAxMy44NzAtMjAuNzU5QzQ1LjIxOCAxMC4zMjggMzUuMTY2LjI3NiAyMi43NjMuMjYyeiIgZmlsbD0idXJsKCNzKSI+PC9wYXRoPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjIyLjc2MiIgY3k9IjIyLjczMiIgcj0iMjAuMDIxIj48L2NpcmNsZT48Y2lyY2xlIGZpbGw9IiNGN0VERDQiIGN4PSIyMi43NjIiIGN5PSIyMi43MzIiIHI9IjIwLjQzNCI+PC9jaXJjbGU+PHBhdGggZD0iTTIyLjc2MiA3LjU3M2MtNi4xMzEgMC0xMS42NTggMy42OTMtMTQuMDA1IDkuMzU3LTIuMzQ2IDUuNjY0LTEuMDQ5IDEyLjE4NCAzLjI4NiAxNi41MiA0LjMzNSA0LjMzNSAxMC44NTUgNS42MzIgMTYuNTIgMy4yODYgNS42NjQtMi4zNDYgOS4zNTctNy44NzMgOS4zNTctMTQuMDA1LS4wMDktOC4zNjgtNi43OTAtMTUuMTQ5LTE1LjE1OC0xNS4xNTh6IiBmaWxsPSIjMkIyNTI1Ij48L3BhdGg+PGNpcmNsZSBmaWxsPSIjNUNDN0YyIiBjeD0iMjIuNzYyIiBjeT0iMjIuNzMyIiByPSIxMS4wNTciPjwvY2lyY2xlPjxjaXJjbGUgZmlsbD0iI0NFNjc4NCIgY3g9IjIyLjc2MiIgY3k9IjIyLjczMiIgcj0iNi43MDQiPjwvY2lyY2xlPjxjaXJjbGUgZmlsbD0iI0Y3RUU4NCIgY3g9IjIyLjc2MiIgY3k9IjIyLjczMiIgcj0iMi4zNjEiPjwvY2lyY2xlPjwvZz48cGF0aCBmaWxsPSIjMDAwIiBvcGFjaXR5PSIuNCIgZD0iTTI0LjQ0MCAzNS4wODNoMS45NDd2MTIuOTYzaC0xLjk0N3pNMjQuNDQwIDIuMTI2aDEuOTQ3djEyLjk2M2gtMS45NDd6Ij48L3BhdGg+PHBhdGggZmlsbD0idXJsKCNjKSIgZD0iTS4yMzEgMzIuOTU3aDEuOTQ3djEyLjk2M0guMjMxeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIuOTEwIDEuMTUyKSI+PC9wYXRoPjxwYXRoIGZpbGw9InVybCgjZCkiIGQ9Ik0uMjMxIDBoMS45NDd2MTIuOTYzSC4yMzF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMi45MTAgMS4xNTIpIj48L3BhdGg+PGc+PHBhdGggZmlsbD0iIzAwMCIgb3BhY2l0eT0iLjQiIGQ9Ik0zNS40MTEgMjQuMTEyaDEyLjk2M3YxLjk0N2gtMTIuOTYzek0yLjQ1NCAyNC4xMTJoMTIuOTYzdjEuOTQ3SDIuNDU0eiI+PC9wYXRoPjxwYXRoIGZpbGw9InVybCgjZSkiIGQ9Ik0zMi45NTcgMGgxMi45NjN2MS45NDdoLTEyLjk2M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMTU1IDIzLjEzOCkiPjwvcGF0aD48cGF0aCBmaWxsPSJ1cmwoI2YpIiBkPSJNMCAwaDEyLjk2M3YxLjk0N0gweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4xNTUgMjMuMTM4KSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+Cg=="
  />
);
const blue_coin_flip = (
  <svg
    width="66.66666666666666%"
    height="91.66666666666666%"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        x1="50%"
        y1="101.9568%"
        x2="49.9959%"
        y2="0%"
        id="coinFlipIcon-history-37-a"
      >
        <stop stop-color="#C3781B" offset="0%"></stop>
        <stop stop-color="#EBBB31" offset="19.332%"></stop>
        <stop stop-color="#F9E382" offset="49.351%"></stop>
        <stop stop-color="#EBBB31" offset="76.111%"></stop>
        <stop stop-color="#C3781B" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="49.9999%"
        y1="100.0001%"
        x2="49.9999%"
        y2="0%"
        id="coinFlipIcon-history-37-b"
      >
        <stop stop-color="#FFF7C0" offset="0%"></stop>
        <stop stop-color="#FFC034" offset="49.027%"></stop>
        <stop stop-color="#FFF0C7" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="49.9543%"
        y1="99.9912%"
        x2="49.9543%"
        y2="-.014%"
        id="coinFlipIcon-history-37-c"
      >
        <stop stop-color="#FFF7C0" offset="0%"></stop>
        <stop stop-color="#FFC034" offset="49.027%"></stop>
        <stop stop-color="#FFF0C7" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="41.2707%"
        y1=".7392%"
        x2="58.6379%"
        y2="99.238%"
        id="coinFlipIcon-history-37-d"
      >
        <stop stop-color="#FFF0C7" offset="0%"></stop>
        <stop stop-color="#F3C936" offset="50.973%"></stop>
        <stop stop-color="#FFFDCF" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="49.9543%"
        y1="99.9912%"
        x2="49.9543%"
        y2="-.0141%"
        id="coinFlipIcon-history-37-e"
      >
        <stop stop-color="#D08D06" offset="0%"></stop>
        <stop stop-color="#924822" offset="49.174%"></stop>
        <stop stop-color="#D08D06" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="91.9536%"
        y1="27.6295%"
        x2="14.5628%"
        y2="68.9056%"
        id="coinFlipIcon-history-37-f"
      >
        <stop stop-color="#1C85EC" offset="20.033%"></stop>
        <stop stop-color="#0533B1" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="39.5571%"
        y1="37.6575%"
        x2="58.0689%"
        y2="67.5623%"
        id="coinFlipIcon-history-37-g"
      >
        <stop stop-color="#3C6CFC" stop-opacity="0" offset="0%"></stop>
        <stop
          stop-color="#3C6CFC"
          stop-opacity="0.0732"
          offset="22.505%"
        ></stop>
        <stop
          stop-color="#3C6CFC"
          stop-opacity="0.2642"
          offset="39.673%"
        ></stop>
        <stop stop-color="#3C6CFC" stop-opacity="0.5693" offset="63.41%"></stop>
        <stop stop-color="#307CFB" stop-opacity="0.8" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g id="coinFlipIcon-history-37-Fill" fill="none" fill-rule="evenodd">
      <path
        d="M29.4202 1.0824C16.763-1.8906 4.0915 5.9562 1.112 18.6117-1.8673 31.2673 5.973 43.943 18.627 46.9287c12.654 2.986 25.3337-4.8478 28.326-17.5003 2.986-12.6691-4.8638-25.36-17.5328-28.346z"
        fill="url(#coinFlipIcon-history-37-a)"
      ></path>
      <path
        d="M29.5226.6496C16.6265-2.4004 3.6996 5.5814.6496 18.4775c-3.05 12.896 4.9319 25.8228 17.828 28.8729 12.896 3.05 25.8228-4.9318 28.8729-17.8279 3.0499-12.896-4.932-25.8228-17.828-28.873zm17.2396 28.7337c-2.164 9.2129-9.6662 16.214-19.0066 17.7368-9.3403 1.5228-18.6779-2.7328-23.656-10.7812-4.9783-8.0485-4.616-18.3037.9177-25.9809C10.551 2.6808 20.1656-.9053 29.3752 1.2728a23.372 23.372 0 0117.387 28.1105z"
        fill="url(#coinFlipIcon-history-37-b)"
      ></path>
      <path
        d="M28.5986 4.556C17.86 2.0275 7.1044 8.681 4.5723 19.4189c-2.532 10.7378 4.118 21.4956 14.855 24.0312 10.737 2.5356 21.497-4.1109 24.0361-14.847C45.999 17.858 39.3439 7.0916 28.5986 4.556zm14.535 23.9691C40.6247 39.0874 30.03 45.6173 19.467 43.112 8.904 40.6065 2.3705 30.014 4.8725 19.4501 7.3745 8.886 17.9649 2.3493 28.5296 4.8479 39.1006 7.3535 45.639 17.954 43.1336 28.525z"
        fill="url(#coinFlipIcon-history-37-c)"
      ></path>
      <path
        d="M28.483 5.0449C18.0144 2.5799 7.5292 9.0662 5.0608 19.534 2.5924 30.002 9.0752 40.4892 19.5422 42.961c10.467 2.4719 20.9566-4.0074 23.4318-14.4736 2.472-10.475-4.016-20.9706-14.491-23.4425zm12.5768 22.9897c-2.237 9.4175-11.6833 15.2397-21.1015 13.0058C10.5402 38.8066 4.715 29.3621 6.9457 19.9432 9.1765 10.5243 18.619 4.696 28.0387 6.9237c9.4252 2.234 15.2549 11.6857 13.021 21.111z"
        fill="url(#coinFlipIcon-history-37-d)"
      ></path>
      <path
        d="M28.5198 4.8895C17.9653 2.4044 7.394 8.9438 4.9055 19.4975 2.417 30.051 8.953 40.6244 19.5057 43.1164c10.5528 2.492 21.1283-4.0403 23.6239-14.5923 2.4921-10.561-4.0489-21.1426-14.6098-23.6347zm14.2856 23.558c-2.4658 10.3811-12.8787 16.799-23.2606 14.3366-10.382-2.4624-16.8033-12.8733-14.3442-23.256C7.6596 9.1454 18.0684 2.7207 28.4519 5.1764 38.8416 7.639 45.268 18.0578 42.8054 28.4475z"
        fill="url(#coinFlipIcon-history-37-e)"
      ></path>
      <ellipse
        fill="url(#coinFlipIcon-history-37-f)"
        fill-rule="nonzero"
        transform="rotate(-76.627 24.0002 24)"
        cx="24.0001"
        cy="24.0001"
        rx="17.5544"
        ry="17.5298"
      ></ellipse>
      <path
        d="M36.3266 11.5083c-5.337-5.2549-13.4211-6.543-20.127-3.207-6.7059 3.336-10.555 10.5606-9.5834 17.9872 12.1273 2.5176 24.4028-3.5892 29.7104-14.7802z"
        fill="url(#coinFlipIcon-history-37-g)"
      ></path>
      <path
        d="M28.0404 6.9169c-6.9093-1.6444-14.1288 1.0366-18.29 6.7923C5.589 19.4648 5.306 27.1607 9.033 33.2065c3.7272 6.0458 10.7301 9.25 17.7416 8.1177 7.0115-1.1322 12.65-6.3779 14.2846-13.2895A17.5421 17.5421 0 0028.0404 6.9169zM40.368 28.2937c-2.1265 8.935-11.0915 14.456-20.0274 12.3337-8.936-2.1222-14.4612-11.0847-12.3431-20.0216 2.118-8.9369 11.078-14.4664 20.0158-12.3525a16.647 16.647 0 0112.3547 20.0404z"
        fill="#0A0F8E"
      ></path>
    </g>
  </svg>
);
const red_coin_flip = (
  <svg
    width="66.66666666666666%"
    height="91.66666666666666%"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        x1="50%"
        y1="101.9568%"
        x2="49.9959%"
        y2="0%"
        id="coinFlipIcon-history-110-a"
      >
        <stop stop-color="#C3781B" offset="0%"></stop>
        <stop stop-color="#EBBB31" offset="19.332%"></stop>
        <stop stop-color="#F9E382" offset="49.351%"></stop>
        <stop stop-color="#EBBB31" offset="76.111%"></stop>
        <stop stop-color="#C3781B" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="49.9999%"
        y1="100.0001%"
        x2="49.9999%"
        y2="0%"
        id="coinFlipIcon-history-110-b"
      >
        <stop stop-color="#FFF7C0" offset="0%"></stop>
        <stop stop-color="#FFC034" offset="49.027%"></stop>
        <stop stop-color="#FFF0C7" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="49.9543%"
        y1="99.9912%"
        x2="49.9543%"
        y2="-.014%"
        id="coinFlipIcon-history-110-c"
      >
        <stop stop-color="#FFF7C0" offset="0%"></stop>
        <stop stop-color="#FFC034" offset="49.027%"></stop>
        <stop stop-color="#FFF0C7" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="41.2707%"
        y1=".7392%"
        x2="58.6379%"
        y2="99.238%"
        id="coinFlipIcon-history-110-d"
      >
        <stop stop-color="#FFF0C7" offset="0%"></stop>
        <stop stop-color="#F3C936" offset="50.973%"></stop>
        <stop stop-color="#FFFDCF" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="49.9543%"
        y1="99.9912%"
        x2="49.9543%"
        y2="-.0141%"
        id="coinFlipIcon-history-110-e"
      >
        <stop stop-color="#D08D06" offset="0%"></stop>
        <stop stop-color="#924822" offset="49.174%"></stop>
        <stop stop-color="#D08D06" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="91.9536%"
        y1="27.6295%"
        x2="14.5628%"
        y2="68.9056%"
        id="coinFlipIcon-history-110-f"
      >
        <stop stop-color="#EC1C31" offset="20.033%"></stop>
        <stop stop-color="#B10524" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="39.5571%"
        y1="37.6575%"
        x2="58.0689%"
        y2="67.5623%"
        id="coinFlipIcon-history-110-g"
      >
        <stop stop-color="#EC3749" stop-opacity="0" offset="0%"></stop>
        <stop
          stop-color="#EB3648"
          stop-opacity="0.0732"
          offset="22.505%"
        ></stop>
        <stop
          stop-color="#E93346"
          stop-opacity="0.2642"
          offset="39.673%"
        ></stop>
        <stop stop-color="#E62E42" stop-opacity="0.5693" offset="63.41%"></stop>
        <stop stop-color="#F33045" stop-opacity="0.8" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g id="coinFlipIcon-history-110-Fill" fill="none" fill-rule="evenodd">
      <path
        d="M29.4202 1.0824C16.763-1.8906 4.0915 5.9562 1.112 18.6117-1.8673 31.2673 5.973 43.943 18.627 46.9287c12.654 2.986 25.3337-4.8478 28.326-17.5003 2.986-12.6691-4.8638-25.36-17.5328-28.346z"
        fill="url(#coinFlipIcon-history-110-a)"
      ></path>
      <path
        d="M29.5226.6496C16.6265-2.4004 3.6996 5.5814.6496 18.4775c-3.05 12.896 4.9319 25.8228 17.828 28.8729 12.896 3.05 25.8228-4.9318 28.8729-17.8279 3.0499-12.896-4.932-25.8228-17.828-28.873zm17.2396 28.7337c-2.164 9.2129-9.6662 16.214-19.0066 17.7368-9.3403 1.5228-18.6779-2.7328-23.656-10.7812-4.9783-8.0485-4.616-18.3037.9177-25.9809C10.551 2.6808 20.1656-.9053 29.3752 1.2728a23.372 23.372 0 0117.387 28.1105z"
        fill="url(#coinFlipIcon-history-110-b)"
      ></path>
      <path
        d="M28.5986 4.556C17.86 2.0275 7.1044 8.681 4.5723 19.4189c-2.532 10.7378 4.118 21.4956 14.855 24.0312 10.737 2.5356 21.497-4.1109 24.0361-14.847C45.999 17.858 39.3439 7.0916 28.5986 4.556zm14.535 23.9691C40.6247 39.0874 30.03 45.6173 19.467 43.112 8.904 40.6065 2.3705 30.014 4.8725 19.4501 7.3745 8.886 17.9649 2.3493 28.5296 4.8479 39.1006 7.3535 45.639 17.954 43.1336 28.525z"
        fill="url(#coinFlipIcon-history-110-c)"
      ></path>
      <path
        d="M28.483 5.0449C18.0144 2.5799 7.5292 9.0662 5.0608 19.534 2.5924 30.002 9.0752 40.4892 19.5422 42.961c10.467 2.4719 20.9566-4.0074 23.4318-14.4736 2.472-10.475-4.016-20.9706-14.491-23.4425zm12.5768 22.9897c-2.237 9.4175-11.6833 15.2397-21.1015 13.0058C10.5402 38.8066 4.715 29.3621 6.9457 19.9432 9.1765 10.5243 18.619 4.696 28.0387 6.9237c9.4252 2.234 15.2549 11.6857 13.021 21.111z"
        fill="url(#coinFlipIcon-history-110-d)"
      ></path>
      <path
        d="M28.5198 4.8895C17.9653 2.4044 7.394 8.9438 4.9055 19.4975 2.417 30.051 8.953 40.6244 19.5057 43.1164c10.5528 2.492 21.1283-4.0403 23.6239-14.5923 2.4921-10.561-4.0489-21.1426-14.6098-23.6347zm14.2856 23.558c-2.4658 10.3811-12.8787 16.799-23.2606 14.3366-10.382-2.4624-16.8033-12.8733-14.3442-23.256C7.6596 9.1454 18.0684 2.7207 28.4519 5.1764 38.8416 7.639 45.268 18.0578 42.8054 28.4475z"
        fill="url(#coinFlipIcon-history-110-e)"
      ></path>
      <ellipse
        fill="url(#coinFlipIcon-history-110-f)"
        fill-rule="nonzero"
        transform="rotate(-76.627 24.0002 24)"
        cx="24.0001"
        cy="24.0001"
        rx="17.5544"
        ry="17.5298"
      ></ellipse>
      <path
        d="M36.3266 11.5083c-5.337-5.2549-13.4211-6.543-20.127-3.207-6.7059 3.336-10.555 10.5606-9.5834 17.9872 12.1273 2.5176 24.4028-3.5892 29.7104-14.7802z"
        fill="url(#coinFlipIcon-history-110-g)"
      ></path>
      <path
        d="M28.0404 6.9169c-6.9093-1.6444-14.1288 1.0366-18.29 6.7923C5.589 19.4648 5.306 27.1607 9.033 33.2065c3.7272 6.0458 10.7301 9.25 17.7416 8.1177 7.0115-1.1322 12.65-6.3779 14.2846-13.2895A17.5421 17.5421 0 0028.0404 6.9169zM40.368 28.2937c-2.1265 8.935-11.0915 14.456-20.0274 12.3337-8.936-2.1222-14.4612-11.0847-12.3431-20.0216 2.118-8.9369 11.078-14.4664 20.0158-12.3525a16.647 16.647 0 0112.3547 20.0404z"
        fill="#8E0A26"
      ></path>
    </g>
  </svg>
);

type SpecialSvg = Record<string, JSX.Element>;

export function StatisticsComponent() {
  const timer = useTimerStore((state) => state.timer);
  const result = useRouletteStore((state) => state.result);

  const sliced_timer = timer < 10 ? "0" + timer : timer;
  return (
    <div className="grid grid-cols-3 text-center  m-6 mx-[2.6rem] font-bold items-center">
      <div className="text-left flex justify-evenly gap-4">
        <div className="p-2 bg-[#1a1a1a99] rounded-full flex flex-col justify-center items-center w-[7rem] border-[1px] border-[#fff6]">
          <span className="text-[.5rem] uppercase font-light">Balance</span>
          <span className="text-[.9rem] text-[#fbdc01]">1000$</span>
        </div>
        <div className="p-2 bg-[#1a1a1a99] rounded-full flex flex-col justify-center items-center w-[7rem] border-[1px] border-[#fff6]">
          <span className="text-[.5rem] uppercase font-light">Total bet</span>
          <span className="text-[.9rem] text-[#fbdc01]">100$</span>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="text-[2.5rem] w-[5.625rem] block text-left">
          0:{sliced_timer}
        </span>
      </div>
      <ul className="grid grid-cols-4 text-center gap-2">
        {result.slice(0, 8).map(({ res, ids }, key) => {
          const specialIds = ["ch", "p", "ct", "cf"];

          const specialSvg: SpecialSvg = {
            ch: cash_hunt_history,
            p: pachinco_history,
            ct: crazy_time_history,
            cf: blue_coin_flip,
          };

          // @ts-ignore
          const index = specialIds.includes(ids) ? specialSvg[ids] : res;

          return (
            <li
              key={key}
              className={`${specialIds.includes(ids) ? "" : ids} h-[2rem] leading-[2rem] text-[1.2rem] rounded-sm flex items-center justify-center`}
            >
              {index}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// <picture>
//   <img />
// </picture>
