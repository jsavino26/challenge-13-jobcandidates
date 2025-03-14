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

  return (
    <div>
      <h1>Potential Candidates</h1>
      {potentialCandidates.length > 0 ? (
        <ul>
          {potentialCandidates.map((candidate) => (
            <li key={candidate.login}>
              <img src={candidate.avatar_url} alt={candidate.login} />
              <h2>{candidate.name || candidate.login}</h2>
              <p>Location: {candidate.location || 'N/A'}</p>
              <p>Email: {candidate.email || 'N/A'}</p>
              <p>Company: {candidate.company || 'N/A'}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates have been accepted</p>
      )}
    </div>
  );
};

export default SavedCandidates;