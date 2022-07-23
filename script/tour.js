import navbar from "../common/navbar.js";
import footer from "../common/footer.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
let data1 = {
  p1: "Everything you need for workforce management",
  p2: "Everhour will make your daily job way easier and more organized",
  Image:
    "https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/all-features-3.webp",
};
let showData1 = (data) => {
  let container1 = document.getElementById("container1");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  div1.setAttribute("id", "headPara");
  div2.setAttribute("id", "headImg");
  let h1 = document.createElement("h1");
  let h3 = document.createElement("h3");
  let inp = document.createElement("input");
  inp.setAttribute("type", "email");
  let btn = document.createElement("button");
  let img = document.createElement("img");
  h1.innerText = data.p1;
  h3.innerText = data.p2;
  inp.placeholder = "Work email...";
  btn.innerText = "Get started";
  btn.addEventListener("click", () => {
    window.location.href = "signup.html";
  });
  img.src = data.Image;
  div1.append(h1, h3, inp, btn);
  div2.append(img);
  container1.append(div1, div2);
};
showData1(data1);

let data3 = [
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS68Jrdx5fFjThPgJotZ7FUB5_c3nez3023pVW7pv_JHQ&s",
    title: "Seemless integrations",
    description:
      "Track time right inside the most popular apps, such as Asana, Basecamp, Jira, Trello, GitHub, ClickUp and more.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHwut3mJVXXhNTapUzUF7zKUe4Z4qLquEyA&usqp=CAU",
    title: "Timer or manual entry",
    description:
      "Start and stop your timer to record activities as you work. Or log hours manually afterwards.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wtZ5xGkQQxvYLpbe2jCYU4Ekrw344IzSgQ&usqp=CAU",
    title: "Clock-in, clock-out",
    description:
      "Know the time spent on projects as well as hours of work and breaks.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcQqe0zOdGgBbOypx2t1RVzgXetvxaN0P6g&usqp=CAU",
    title: "Estimates",
    description:
      "Set time estimates so at any time you can see the time you spend and what is left.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmW1yLCuL9_hK21tJyt8Y-BWV8E7wfLST2QA&usqp=CAU",
    title: "Reminders",
    description:
      "Receive notifications about long-running timers and reminders to track time",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNONx4kc1i85llnDefHzrRUmIPMrb6BPKFWw&usqp=CAU",
    title: "Time off",
    description: "Track paid time off, vacations, sick days and leave types.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4RFEeldN3g22YqlOCAXKwqDxUkrFD7KEu7w&usqp=CAU",
    title: "Auto-stop timer",
    description: "Configure to auto stop timer at the end of the workday.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSShPTHcxTWp5Kv7JYvlD1lAynYxJ8iRCOLjg&usqp=CAU",
    title: "Time log",
    description:
      "All changes and estimates made to the task time are logged and available for revision.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zyuAN3V54JMUO_m5qoekX_rgXim9_oDZ3g&usqp=CAU",
    title: "Automate with Zapier",
    description:
      "Use Zapier for automatic data transfer between Everhour and 1000+ apps with no technical knowledge.",
  },
  {
    icon: "https://visualpharm.com/assets/466/Chrome-595b40b65ba036ed117d12b2.svg",
    title: "Browser extension",
    description:
      "Track time right from your browser’s toolbar with a single click.",
  },
  {
    icon: "https://visualpharm.com/assets/261/iPhone-595b40b75ba036ed117d9e74.svg",
    title: "iPhone app",
    description: "Record time spent on projects and tasks from your iPhone.",
  },
];
let data4 = [
  {
    icon: "https://visualpharm.com/assets/809/Folder-595b40b65ba036ed117d4414.svg",
    title: "Manage clients",
    description:
      "Create clients, assign projects, watch budgets, spot uninvoiced time.",
  },
  {
    icon: "https://visualpharm.com/assets/9/Money-595b40b65ba036ed117d14ee.svg",
    title: "Flexible billing",
    description:
      "Choose an appropriate billing method: non-billable, time and materials or fixed fee.",
  },
  {
    icon: "https://visualpharm.com/assets/685/Budget-595b40b65ba036ed117d3ccc.svg",
    title: "Budgets",
    description:
      "Set up a capital or recurring budget for your projects. Don’t let finances catch you by surprise.",
  },
  {
    icon: "https://visualpharm.com/assets/622/Google%20Alerts-595b40b65ba036ed117d1400.svg",
    title: "Alerts",
    description:
      "Receive an email alert when you reach a certain percentage of the project budget.",
  },
  {
    icon: "https://cdn2.vectorstock.com/i/thumb-large/97/11/divide-personal-budget-rgb-color-icon-vector-40129711.jpg",
    title: "Labor costs",
    description:
      "Track what an employee or contractor costs you compared to how much you charge for their work.",
  },
  {
    icon: "https://visualpharm.com/assets/223/Cheap%202-595b40b85ba036ed117dcc0c.svg",
    title: "Non-billable time",
    description: "Exclude certain tasks from the billable amount calculation.",
  },
  {
    icon: "https://cdn2.vectorstock.com/i/thumb-large/37/86/money-bag-icon-for-budgeting-on-white-background-vector-19773786.jpg",
    title: "Disallow overbudget",
    description: "Configure to auto stop timer at the end of the workday.",
  },
  {
    icon: "https://cdn4.vectorstock.com/i/thumb-large/98/88/budgeting-chalk-icon-vector-29049888.jpg",
    title: "Custom task rates",
    description:
      "You can override the base rate for a project and assign a specific rate to each task.",
  },
  {
    icon: "https://cdn.vectorstock.com/i/thumb-large/56/90/visible-vector-30725690.webp",
    title: "Budget visibility",
    description:
      "Decide if members can see a project’s budget, which is visible to admins only by default.",
  },
];
let data5 = [
  {
    icon: "https://cdn.vectorstock.com/i/thumb-large/42/67/technical-task-yellow-flat-design-long-shadow-vector-31584267.webp",
    title: "Manage tasks",
    description:
      "Create new tasks in seconds, set priorities, deadlines and assign to the team.",
  },
  {
    icon: "https://cdn.vectorstock.com/i/thumb-large/71/60/sale-tag-vector-17027160.webp",
    title: "Use sections and tags",
    description:
      "Use tags and sections to organize, and add context, to your tasks.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wtZ5xGkQQxvYLpbe2jCYU4Ekrw344IzSgQ&usqp=CAU",
    title: "List or Board views",
    description:
      "Whether you prefer board or list views for your project tasks, we have you covered.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcQqe0zOdGgBbOypx2t1RVzgXetvxaN0P6g&usqp=CAU",
    title: "Copy templates",
    description:
      "Copy project with tasks and estimates to start new similar projects in minutes.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmW1yLCuL9_hK21tJyt8Y-BWV8E7wfLST2QA&usqp=CAU",
    title: "Estimates",
    description:
      "Set time estimates so at any time you can see the time you spend and what is left.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNONx4kc1i85llnDefHzrRUmIPMrb6BPKFWw&usqp=CAU",
    title: "Archive",
    description:
      "Archive projects that you no longer need. We keep all time and data preserved.",
  },
];
let data6 = [
  {
    icon: "https://cdn.vectorstock.com/i/thumb-large/78/01/machine-vision-visual-recognition-icon-vector-23097801.webp",
    title: "Visualize",
    description:
      "View an interactive plan with your team’s schedule or project portfolio on one page.",
  },
  {
    icon: "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-report-icon-png-image_3991909.jpg",
    title: "Plan vs reported",
    description:
      "See the progress of logged time vs. scheduled time of every team member.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wtZ5xGkQQxvYLpbe2jCYU4Ekrw344IzSgQ&usqp=CAU",
    title: "Resource availability",
    description:
      "Know when someone with the necessary expertise will be available for a new project.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcQqe0zOdGgBbOypx2t1RVzgXetvxaN0P6g&usqp=CAU",
    title: "Absence",
    description:
      "Add your team’s leave or holidays to the schedule to keep records and avoid conflicts.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmW1yLCuL9_hK21tJyt8Y-BWV8E7wfLST2QA&usqp=CAU",
    title: "Filter",
    description:
      "Zoom in & out, search, filter and sort to quickly view specific team members and assignmente",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNONx4kc1i85llnDefHzrRUmIPMrb6BPKFWw&usqp=CAU",
    title: "Avoid overbooking",
    description:
      "Configure weekly capacity and see who’s overbooked and who can take on more.",
  },
];
let data7 = [
  {
    icon: "https://cdn.vectorstock.com/i/thumb-large/96/79/invoicing-gradient-linear-icon-vector-38599679.webp",
    title: "Track expenses",
    description:
      "Track work-related expenses such as materials, travel, and others incurred on the job.",
  },
  {
    icon: "https://cdn.vectorstock.com/i/thumb-large/89/09/note-icon-sign-paper-message-or-document-page-vector-43078909.webp",
    title: "Attach receipts",
    description: "Upload and save a receipt when you add an expense.",
  },
  {
    icon: "https://cdn.vectorstock.com/i/thumb-large/70/92/real-estate-market-gradient-linear-icons-set-vector-41447092.webp",
    title: "Unit pricing",
    description:
      "Instead of entering the bare sum, switch on the unit price per expense category.",
  },
];

let showData3 = (data, con) => {
  let cont = document.getElementById(con);

  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "features");
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    img.src = el.icon;
    h4.innerText = el.title;

    p.innerText = el.description;
    div2.append(img, h4);
    div.append(div2, p);
    cont.append(div);
  });
};

showData3(data3, "container2");
showData3(data4, "container3");
showData3(data5, "container4");
showData3(data6, "container5");
showData3(data7, "container6");
let mster = localStorage.getItem("check")
console.log(mster)
if (mster == "tures") {
  let signIn = document.getElementById("sing");
  let log = document.getElementById("slog");
  let darray = JSON.parse(localStorage.getItem("userdata"));
  console.log("darray:", darray.username.length);

  if (darray.username.length > 0) {
    signIn.innerText = darray.username;
    log.innerHTML = null;
  }
}


