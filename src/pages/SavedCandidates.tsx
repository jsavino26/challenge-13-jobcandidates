import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedCandidates = localStorage.getItem('potentialCandidates');
    if (savedCandidates) {
      setPotentialCandidates(JSON.parse(savedCandidates));
    }
  }, []);

  const removeCandidate = (login: string) => {
    const updatedCandidates = potentialCandidates.filter((candidate) => candidate.login !== login);
    setPotentialCandidates(updatedCandidates);
    localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div>
      <h1>Potential Candidates</h1>
      {potentialCandidates.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th> {/* New Column */}
            </tr>
          </thead>
          <tbody>
            {potentialCandidates.map((candidate) => (
              <tr key={candidate.login}>
                <td>
                  <img 
                    src={candidate.avatar_url} 
                    alt={candidate.login} 
                    style={{ width: '40px', borderRadius: '50%' }} 
                  />
                </td>
                <td>{candidate.name || candidate.login}</td>
                <td>{candidate.location || 'N/A'}</td>
                <td>{candidate.email || 'N/A'}</td>
                <td>{candidate.company || 'N/A'}</td>
                <td>
                  <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                    Profile
                  </a>
                </td>
                <td>
                  <button className="reject-btn" onClick={() => removeCandidate(candidate.login)}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates have been accepted</p>
      )}
    </div>
  );
};

export default SavedCandidates;