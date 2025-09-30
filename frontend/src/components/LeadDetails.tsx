import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface Lead {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const LeadDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [lead, setLead] = useState<Lead | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLead = async () => {
      try {
        const res = await axios.get(`https://portfolio-ydi2.onrender.com/api/contact/${id}`, {
          withCredentials: true,
        });
        setLead(res.data);
      } catch (error) {
        console.error("Error fetching lead:", error);
      }
    };

    fetchLead();
  }, [id]);

  if (!lead) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Lead Details</h2>
      <p><strong>Name:</strong> {lead.name}</p>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Message:</strong></p>
      <p className="mt-2 p-3 bg-gray-100 rounded">{lead.message}</p>
      <p className="text-gray-500 mt-4">
        <strong>Date:</strong> {new Date(lead.createdAt).toLocaleString()}
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back
      </button>
    </div>
  );
};

export default LeadDetails;
