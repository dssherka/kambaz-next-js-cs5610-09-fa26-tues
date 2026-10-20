export default function TemplateLiterals() {
  const five = 2 + 3;
  const result1 = "2 + 3 = " + five;
  const result2 = `2 + 3 = ${2 + 3}`;
  const username = "alice";
  const name = "Daoud";
  const greeting1 = `Welcome home ${username}`;
  const greeting2 = `${name} is registered for this class.`;
  const loggedIn = false;
  const greeting3 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
  const webdev_published = true;
  const webdev_published_message = `WB published: ${webdev_published ? "Yes" : "No"}`;
  const published = true;
  const courseStatus = `RS101 published: ${published ? "Yes" : "No"}`;
  return (
    <div id="wd-template-literals">
      <h4>Template Literals</h4>
      result1 = {result1}
      <br />
      result2 = {result2}
      <br />
      greeting1 = {greeting1}
      <br />
      greeting2 = {greeting2}
      <br />
      courseStatus = {courseStatus}
      <br />
      greeting3 = {greeting3}
      <br/>
        webdev_published_message = {webdev_published_message}
      <hr />
    </div>
  );
}