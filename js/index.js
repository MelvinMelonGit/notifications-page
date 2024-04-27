const notificationSingles = [...document.querySelectorAll(".notification-single")]

const markRead = document.querySelector(".mark-read")

const notificationSpan = document.querySelector(".notification-heading span")

let notificationCount = parseInt(notificationSpan.innerText) || 0

notificationSingles.forEach(notification => {
    notification.addEventListener("click", () => {
        notification.classList.toggle("unread")

        notification.classList.contains("unread") ? notificationCount++ : notificationCount--
        notificationSpan.innerText = notificationCount
    }) 
})

markRead.addEventListener("click", () => {
    notificationSingles.forEach(notification => {
        notification.classList.remove("unread")
    })

    notificationCount = 0
    notificationSpan.innerText = notificationCount
})