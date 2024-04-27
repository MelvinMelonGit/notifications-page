const notificationSingles = [...document.querySelectorAll(".notification-single")]

const markRead = document.querySelector(".mark-read")

notificationSingles.forEach(notification => {
    notification.addEventListener("click", () => {
        notification.classList.toggle("unread")
    })
})

markRead.addEventListener("click", () => {
    notificationSingles.forEach(notification => {
        notification.classList.remove("unread")
    })
})