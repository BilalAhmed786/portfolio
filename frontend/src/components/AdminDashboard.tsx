import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Lead {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const AdminDashboard: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // fetch leads
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/contact", {
          withCredentials: true, // if using cookies for auth
        });
        setLeads(res.data);
        setFilteredLeads(res.data);
      } catch (error) {
        console.error("Error fetching leads:", error);
      }
    };

    fetchLeads();
  }, []);

  // search filter
  useEffect(() => {
    const result = leads.filter(
      (lead) =>
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.message.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredLeads(result);
  }, [search, leads]);

  // columns
  const columns = [
    {
      name: "Name",
      selector: (row: Lead) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: Lead) => row.email,
      sortable: true,
    },
    {
      name: "Message",
      selector: (row: Lead) => row.message,
    },
    {
      name: "Date",
      selector: (row: Lead) => new Date(row.createdAt).toLocaleDateString(),
      sortable: true,
    },
  ];

  // logout handler
  const handleLogout = async() => {


    await axios.post("http://localhost:4000/api/logout", {}, { withCredentials: true });

    navigate("/login");
  };

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto" }}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome Admin 🎉</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <DataTable
        title="Contact Leads"
        columns={columns}
        data={filteredLeads}
        pagination
        highlightOnHover
        onRowClicked={(row: Lead) => navigate(`/admin/lead/${row._id}`)}
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search leads..."
            className="border px-3 py-2 rounded w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    </div>
  );
};

export default AdminDashboard;
