const notificationsArray = [
  "This is first notification",
  "This is second notification"
];
const bell = document.getElementsByClassName("bell-notifications")[0];
const noticiationsContainer = document.getElementsByClassName(
  "notifications"
)[0];

bell.addEventListener("click", e => {
  if (noticiationsContainer.childElementCount === 1) {
    noticiationsContainer.appendChild(createNotifications(notificationsArray));
  } else {
    noticiationsContainer.removeChild(noticiationsContainer.lastChild);
  }
});

function createNotifications(arr) {
  let notifications = document.createElement("div");
  notifications.setAttribute("class", "newNotifications");
  for (let i = 0; i < arr.length; i++) {
    let notification = document.createElement("span");
    notification.textContent = arr[i];
    notification.setAttribute("class", "notification");
    notifications.appendChild(notification);
  }
  return notifications;
}
