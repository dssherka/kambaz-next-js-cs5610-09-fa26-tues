export default function YourForm(){
  return (
    <>
    <h3 id="wd-your-form">Your Form</h3>
    <label htmlFor="wd-text-fields-first-name">First Name:</label>
    <input type="text" placeholder="Jane" id="wd-text-fields-first-name"/> <br/>
    <label htmlFor="wd-text-fields-last-name">Last Name:</label>
    <input type="text" placeholder="Doe" id="wd-text-fields-last-name"/> <br/>
    <label htmlFor="wd-text-fields-studentid">Student ID:</label>
    <input type="password" id="wd-text-fields-studentid"/>
    <br/>

    <label>Biography:</label> <br/>
    <textarea id="wd-textarea-biography"
      cols={30}
      rows={10}
      />
    <br/>
    <label>Grade:</label>
    <br/>
    <input type="radio" name="radio-grade" id="wd-radio-freshman"/>
    <label htmlFor="wd-radio-freshman">Freshman</label>
    <br/>
    <input type="radio" name="radio-grade" id="wd-radio-sophmore"/>
    <label htmlFor="wd-radio-sophmore">Sophmore</label>
    <br/>
    <input type="radio" name="radio-grade" id="wd-radio-junior"/>
    <label htmlFor="wd-radio-junior">Junior</label>
    <br/>
    <input type="radio" name="radio-grade" id="wd-radio-senior"/>
    <label htmlFor="wd-radio-senior">Senior</label>
    <br/>
    <input type="radio" name="radio-grade" id="wd-radio-graduate"/>
    <label htmlFor="wd-radio-graduate">Graduate</label>
    <br/>
    <label>Enrollment Status:</label>
    <br/>
    <input type="radio" name="radio-enrollment" id="wd-radio-fulltime"/>
    <label htmlFor="wd-radio-fulltime">Full time</label>
    <br />

    <input type="radio" name="radio-enrollment" id="wd-radio-parttime"/>
    <label htmlFor="wd-radio-parttime">Part time</label>
    <br />
    <label>Favorite languages:</label>
    <br/>
    <input type="checkbox" name="favlanguage" id="wd-chkbox-python"/>
    <label htmlFor="wd-chkbox-python">Python</label>
        <br/>
    <input type="checkbox" name="favlanguage" id="wd-chkbox-java"/>
    <label htmlFor="wd-chkbox-java">Java</label>
        <br/>
    <input type="checkbox" name="favlanguage" id="wd-chkbox-HTML"/>
    <label htmlFor="wd-chkbox-HTML">HTML</label>
        <br/>
    <input type="checkbox" name="favlanguage" id="wd-chkbox-sql"/>
    <label htmlFor="wd-chkbox-sql">SQL</label>
    <br/>
    <label htmlFor="wd-select-major">What is your major?</label>
    <br/>
    <select id="wd-select-major" defaultValue="Computer Science">
        <option value="COMPUTER SCIENCE">Computer Science</option>
        <option value="BIOLOGY">Biology</option>
        <option value="MARKETING">Marketing</option>
        <option value="GRAPHIC DESIGN">Graphic Design</option>
    </select>
    <br/>
    <label htmlFor="wd-deepen-topics">What topics you want to explore/improve?</label>
    <br/>
    <select
        multiple
        id="wd-deepen-topics"
        defaultValue={["CV","WEBDEV"]}
        >
        <option value="ALGORITHMS">Algorithms</option>
        <option value="UX">UX Design</option>
        <option value="CV">Computer Vision</option>
        <option value="WEBDEV">Web Development</option>
        </select>
        <br/>

    <label htmlFor="wd-text-fields-email">School Email:</label>
    <input type="email" placeholder="jane@university.edu"
        id="wd-text-fields-email"/>
    <br/>
    <label htmlFor="wd-text-field-grad-year">Graduation Year:</label>
    <input type="number" defaultValue="2027"
        min={2027} max={2031} step={1}
        id="wd-text-field-grad-year"/>
    <br/>
    <label htmlFor="wd-text-field-bday">Birthday:</label>
    <input type="date"
        min="1900-01-01"
        max="2025-12-31"
        id="wd-text-field-bday"
        />
        <br/>
    <label htmlFor="wd-text-field-excitment">How excited are you for this class?</label>
    <input
        type="range"
        defaultValue="5"
        min="1"
        max="10"
        id="wd-text-field-excitment"/>
        <br/>
        <button id="wd-html-button-save" type="submit">Save</button>
        <button id="wd-html-button-cancel" type="button">Cancel</button>



    </>

  );
}
