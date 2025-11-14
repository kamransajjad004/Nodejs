import chalk from "chalk"
import os from "os"
console.log(chalk.green("           💻SYSTEM INFO CLI TOOL"));
console.log(chalk.cyanBright("============================================"));
console.log(chalk.cyanBright("============================================"));
console.log("");
console.log(chalk.yellow("📌 platform:"),os.platform());
console.log(chalk.yellow("📌 OS Type:"),os.type());
console.log(chalk.yellow("📌 Release:"),os.release());
console.log(chalk.yellow("📌 Architecture:"),os.arch());
console.log(chalk.yellow("📌 Hostname:"),os.hostname());
console.log("");
console.log(chalk.magenta("🧠 CPU Info"));
console.log(chalk.magenta("Cores:"),chalk.white(os.cpus().length));
console.log(chalk.magenta("Model:"),chalk.white(os.cpus().at(0).model));
console.log("");
console.log(chalk.blueBright("💾 Memory Info"));
console.log(chalk.blue("Total Memory:"),chalk.white((os.totalmem()/1024/1024/1024).toFixed(2),"GB"));
console.log(chalk.blue("Free Memory:"),chalk.white((os.freemem()/1024/1024/1024).toFixed(2),"GB"));
console.log("");
console.log(chalk.greenBright("🌐 Network Interfaces"));
let net = os.networkInterfaces();
console.log(chalk.green("Interface (Wi-Fi):"),net.lo[1].address)
console.log(chalk.green("Interface (Loopback Pseudo-Interface 1):"),net.lo[0].address)
console.log(chalk.green("Interface (vEthernet (WSL (Hyper-V firewall))):"),net.eth0[0].address)
console.log("");
console.log(chalk.redBright("⌛ Uptime"));
console.log(chalk.red("Uptime (Seconds):"),os.uptime());
console.log("");
console.log(chalk.cyan("🏠 Home Directory:"),os.homedir());
console.log(chalk.cyan("📂 Temp Directory:"),os.tmpdir());
console.log("");
console.log(chalk.green("✔️ System Info Retrieved Successfully"));
console.log("");

