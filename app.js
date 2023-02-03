const Koa = require("koa");
const KoaRouter = require("koa-router");
const json = require("koa-json");
const path = require("path");
// const render = require("koa-ejs");
const bodyParser = require("koa-bodyparser");
const cors = require("cors");

const app = new Koa();
const router = new KoaRouter();

app.use(json());
app.use(bodyParser());
// app.use(cors());
const things = [
  {
    name: "TV",
    id: "dv01",
    power: 50,
  },
  {
    name: "Washer",
    id: "dv02",
    power: 60,
  },
  {
    name: "Refrigerator",
    id: "dv03",
    power: 80,
  },
  {
    name: "Selling",
    id: "dv04",
    power: 100,
  },
  {
    name: "Ipad",
    id: "dv05",
    power: 50,
  },
];

const product = [
  {
    name: "TV",
    id: "dv01",
    power: 50,
  },
  {
    name: "Washer",
    id: "dv02",
    power: 60,
  },
  {
    name: "Refrigerator",
    id: "dv03",
    power: 80,
  },
  {
    name: "Selling",
    id: "dv04",
    power: 100,
  },
  {
    name: "Ipad",
    id: "dv05",
    power: 50,
  },
  {
    name: "Iphone",
    id: "dv06",
    power: 60,
  },
  {
    name: "Headphone",
    id: "dv07",
    power: 80,
  },
  {
    name: "Mouse",
    id: "dv08",
    power: 100,
  },
  {
    name: "Adapter",
    id: "dv09",
    power: 50,
  },
  {
    name: "Charger",
    id: "dv10",
    power: 60,
  },
  {
    name: "AC",
    id: "dv11",
    power: 80,
  },
  {
    name: "Transformer",
    id: "dv12",
    power: 100,
  },
  {
    name: "Led",
    id: "dv13",
    power: 50,
  },
  {
    name: "Bom",
    id: "dv14",
    power: 60,
  },
  {
    name: "Bom hat nhan",
    id: "dv15",
    power: 80,
  },
  {
    name: "Laptop",
    id: "dv16",
    power: 100,
  },
  {
    name: "PC",
    id: "dv17",
    power: 50,
  },
  {
    name: "Elavator",
    id: "dv18",
    power: 60,
  },
  {
    name: "Refrigerator",
    id: "dv19",
    power: 80,
  },
  {
    name: "Robot",
    id: "dv20",
    power: 100,
  },
  {
    name: "Optimus Prime",
    id: "dv21",
    power: 50,
  },
  {
    name: "NTN",
    id: "dv22",
    power: 60,
  },
  {
    name: "Mike Tyson",
    id: "dv23",
    power: 80,
  },
  {
    name: "Kimook",
    id: "dv24",
    power: 100,
  },
  {
    name: "Plane",
    id: "dv25",
    power: 50,
  },
  {
    name: "DVD reader",
    id: "dv26",
    power: 60,
  },
  {
    name: "Lamp",
    id: "dv27",
    power: 80,
  },
  {
    name: "Toeic",
    id: "dv28",
    power: 100,
  },
  {
    name: "Anime",
    id: "dv29",
    power: 50,
  },
  {
    name: "Hollywood",
    id: "dv30",
    power: 60,
  },
  {
    name: "Terminator",
    id: "dv31",
    power: 80,
  },
  {
    name: "Robocop",
    id: "dv32",
    power: 100,
  },
];

router.get("/", read);

async function read(ctx) {
  ctx.body = things;
}

router.post("/add", add);

async function add(ctx) {
  const body = ctx.request.body;
  console.log("Body Data: ", body);
  things.push(body);
  ctx.body = "Added";
  // ctx.redirect("http://localhost:3000/dashboard");
}

router.get("/list", list);

async function list(ctx) {
  ctx.body = product;
}

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => console.log("Server Started..."));
