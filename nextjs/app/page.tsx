import { redirect } from 'next/navigation';

export default function Page() {
  async function sayHello(data: FormData) {
    'use server';

    const name = data.get('name');

    redirect(`http://localhost/fastify/hello?name=${name}`);
  }

  return (
    <div className="bg-gray-50 relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/beams.jpg)] bg-center"></div>
      <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="ring-gray-900/5 relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <div className="divide-gray-300/50">
            <div className="text-base leading-7 text-gray-600">
              <p className="text-md">
                Submitting the following form will invoke a server action which redirects you to a seperate application,
                running under the same host.
              </p>
              <i className="text-sm text-slate-500">https://localhost:3001/hello</i>
            </div>
            <form action={sayHello} className="py-2 flex flex-col">
              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold my-5 py-2 px-4 border border-gray-300 rounded shadow" type="submit">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
