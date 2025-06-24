export async function fetchPatients() {
    const response = await fetch(
      'https://fedskillstest.coalitiontechnologies.workers.dev',
      {
        headers: {
          Authorization: 'Basic ' + btoa('coalition:skills-test'),
        },
      }
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch patients');
    }
  
    const data = await response.json();
    return Array.isArray(data) ? data : [data];
  }