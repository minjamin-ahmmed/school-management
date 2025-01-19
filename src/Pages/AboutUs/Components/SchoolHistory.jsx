import history from "../../../assets/history-100.png";

const SchoolHistory = () => {
  return (
    <div
      className="py-20"
      style={{
        backgroundImage: `url(${history})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <h1 className="text-4xl font-semibold text-accent text-center mb-6">
          Our 100 Year’s History
        </h1>

        <p className="text-center">
          The William M. Rice Institute for the Advancement of Literature,
          Science and Art filed its state charter in the Texas capital May 19,
          1891. The original charter stipulated that the institute charge no
          tuition and would be for “the instruction and improvement of the white
          inhabitants of the City of Houston and State of Texas.” The institute
          was founded with a bequest of $4.6 million from the estate of William
          Marsh Rice, a merchant who arrived in Texas in 1838 and soon
          thereafter moved to the newly founded city of Houston. In the 1840s
          and 1850s, he accumulated his wealth by providing supplies to
          plantation owners and selling cotton and sugar crops, produced in
          large part by enslaved labor. Rice, too, owned enslaved people and
          benefited from their labor. After the Civil War, he took the oath of
          loyalty to the restored United States and lived thereafter in New
          Jersey and New York, while keeping a close eye on his many ongoing
          profitable endeavors in Texas. The childless Rice was murdered
          September 23, 1900, in New York by his butler and lawyer in an attempt
          to steal his fortune. After considerable litigation, Rice’s bequest in
          1904 was deployed toward the purpose he intended — his namesake
          institute in the rapidly growing city of Houston. After selecting
          Edgar Odell Lovett, a mathematician from Princeton University, to
          serve as the first president, the institute’s trustees sent Lovett on
          an international trip in search of the best pedagogical practices,
          ideas and personnel. <br /> <br /> From October 10 to 12, 1912, the
          Rice Institute celebrated its opening with lectures by eminent guests
          from around the world. President Lovett proclaimed that he and his
          colleagues planned “to assign no upper limit to its educational
          endeavor.” With 77 male and female students and a faculty of about a
          dozen in its opening year, the institute quickly grew in size and
          importance, led by Lovett and James Addison Baker Jr., who chaired
          Rice’s Board of Trustees from 1891 to 1941. By the time Lovett stepped
          down as president in 1946, the institute was a key part of a booming
          city of more than half a million residents.
        </p>
      </div>
    </div>
  );
};

export default SchoolHistory;
