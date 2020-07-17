export const Business = (bizObj) => {
  return `
    <section class="biz__card">
      <h2>${bizObj.companyName}</h2>
      <div>${bizObj.addressFullStreet}</div>
    </section>
  `
}