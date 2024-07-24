function sortCustomerName(customers) {
  for (let i = 0; i < customers.length - 1; i++) {
    for (let k = 0; k < customers.length - i - 1; k++) {
      if (customers[k] > customers[k + 1]) {
        let temp;
        temp = customers[k];
        customers[k] = customers[k + 1];
        customers[k + 1] = temp;
      }
    }
  }
  return customers;
}

// ตอบคำถามตรงนี้จ้า
/*BigO = O(n^2) เนื่องจากมีการลูปสองรอบ หากลูปรอบเดียวจะเป็น O(n)
ซึ่งการลูปแต่ละรอบ จะลูปจากด้านในเพื่อเทียบค่าอาเรย์ตัวแรกละตัวที่สอง จากนั้นสลับค่า
และลูปนอกค่อยทำงาน
สรุป: การใช้ bubblesort จะไม่ค่อยมีประสิทธิภาพในกรณีที่มีข้อมูลขนาดใหญ่
*/
