export const Business = (bizObj) => {
  return `
    <section>
      <h5>${bizObj.companyName}</h5>
      <div>${bizObj.addressFullStreet}</div>
    </section>
  `
}