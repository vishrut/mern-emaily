import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div class="fixed-action-btn">
        <Link
          style={{ position: 'absolute', bottom: '50px', right: '50px' }}
          to="/surveys/new"
          class="btn-floating btn-large red"
        >
          <i class="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
