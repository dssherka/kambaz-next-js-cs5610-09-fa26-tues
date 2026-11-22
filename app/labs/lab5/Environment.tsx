export default function Environment() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  return (
    <div id="wd-lab5-environment">
      <h3 className="mt-4 text-xl font-semibold">Environment</h3>
      <p>
        <code className="text-red-600">NEXT_PUBLIC_HTTP_SERVER</code> ={" "}
        <code className="text-red-600">{HTTP_SERVER}</code>
      </p>
      <a
        id="wd-welcome-link"
        className="text-blue-700 underline"
        href={`${HTTP_SERVER}/lab5/welcome`}
      >
        Welcome
      </a>
      <hr className="my-4" />
    </div>
  );
}
