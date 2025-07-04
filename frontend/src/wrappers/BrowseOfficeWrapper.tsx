import { useEffect, useState } from "react";
import OfficeCard from "../components/OfficeCard";
import { Office } from "../types/type";
import axios from "axios";
import "../index.css";
export default function BrowseOfficeWrapper() {
  const [offices, setOffices] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/offices", {
        headers: {
          X_API_KEY: "ugbwqoufbnqfbnwir11no2kh79",
        },
      })
      .then((response) => {
        setOffices(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error}</p>;
  }
  return (
    <section
      id="Fresh-Space"
      className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px] p-5 sm:p-0"
    >
      <h2 className="font-bold text-[32px] leading-[48px] sm:text-nowrap text-center">
        Browse Our Fresh Space.
        <br />
        For Your Better Productivity.
      </h2>
      <div className="grid sm:grid-cols-3 gap-[30px]">
        {offices.map((office) => (
          <OfficeCard key={office.id} office={office}></OfficeCard>
        ))}
      </div>
    </section>
  );
}
