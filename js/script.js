document.addEventListener("DOMContentLoaded", () => {

```
console.log("CloudMonitor Project 49 loaded successfully.");

const status = document.querySelector(".status");

if (status) {
    status.addEventListener("click", () => {
        alert("CloudMonitor system is operational!");
    });
}
```

});
