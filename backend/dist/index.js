"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const user_1 = __importDefault(require("./model/user"));
const leads_1 = __importDefault(require("./model/leads"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
require("./db/db");
const middleware_1 = __importDefault(require("./middleware/middleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: 'https://portfolio-inky-two-60.vercel.app/',
    credentials: true
}));
app.listen(process.env.PORT, () => {
    console.log(`app listen on port ${process.env.PORT}`);
});
//routes
app.post("/api/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields required" });
    }
    const user = yield user_1.default.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }
    // compare hashed password
    if (user.password !== password) {
        return res.status(400).json({ message: "Invalid email or password" });
    }
    // create JWT
    const token = jsonwebtoken_1.default.sign({ id: user._id, role: "admin" }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
    // send token in HttpOnly cookie
    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 60 * 60 * 1000, // 1 hour
    });
    return res.json({ message: "Login successful" });
}));
app.get('/api/authuser', middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    try {
        const user = yield user_1.default.findOne({ _id: id }, { password: 0 });
        return res.json(user);
    }
    catch (error) {
        console.log(error);
    }
}));
app.post('/api/contact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json('All fields required');
    }
    try {
        const newlead = new leads_1.default({ name, email, message });
        yield newlead.save();
        return res.json({ success: "Message sent successfully" });
    }
    catch (error) {
        console.log(error);
    }
}));
app.get('/api/contact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leads = yield leads_1.default.find({});
        return res.json(leads);
    }
    catch (error) {
        console.log(error);
    }
}));
app.get('/api/contact/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leads = yield leads_1.default.findById(req.params.id);
        return res.json(leads);
    }
    catch (error) {
        console.log(error);
    }
}));
// Logout route
app.post("/api/logout", (req, res) => {
    res.clearCookie("token", {
        httpOnly: true, // must match how you set the cookie at login
        secure: true,
        sameSite: "none",
    });
    return res.json({ message: "Logged out successfully" });
});
