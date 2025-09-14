import { history } from "./carts.js";
import { input } from "./input.js";

export const isiHistori = async()=>{
  console.log("\n=== History Pemesanan ===");
  if (history.length === 0) {
    console.log("\nBelum ada pesanan.");
    await input("\nTekan Enter untuk keluar..");
    return;
  }

  history.forEach((order, i) => {
    console.log(`\nPesanan #${i + 1}:`);
    let total = 0;
    order.forEach((item) => {
      console.log(`- ${item.name} x${item.amount} = Rp ${item.subtotal}`);
      total += item.subtotal;
    });
    console.log(`\nTotal: Rp ${total}`);
  });

  await input("\nTekan Enter untuk kembali...");
  console.clear()
}
