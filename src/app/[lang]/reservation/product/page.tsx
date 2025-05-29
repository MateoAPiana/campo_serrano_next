export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center max-h-screen w-full p-4 gap-6">
      <h1 className="text-3xl">Consult price to our products</h1>
      <section className="content flex gap-8">
        <form action="post" className="flex flex-col gap-4 w-full max-w-md">
          <label>
            Your address: <br />
            <input style={{ "padding": "5px" }} className="border-1 rounded-2xl" type="text" name="address" placeholder="Enter your address" required />
          </label>
          <label>
            Your email: <br />
            <input style={{ "padding": "5px" }} className="border-1 rounded-2xl" type="email" name="email" placeholder="Enter your email" required />
          </label>
          <input type="submit" name="productReservationButton" id="productReservationButtonForm" value={"Submit"} className="border rounded-2xl max-w-2xs" style={{ "padding": "5px" }} />
        </form>
        <img className="w-2xs" src="/assets/othersmock.png" alt="Our products image" />
      </section>
    </main>
  )
}