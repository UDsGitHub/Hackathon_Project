function riskTypes (){
    return (
      <div className="dropdown">
        <div className="dropdown-btn">Risk Type</div>
        <div className="dropdown-content">
          <div className="dropdown-item">Slip and Fall</div>
          <div className="dropdown-item">Struck by Moving Machinery</div>
          <div className="dropdown-item">Fire and Explosions</div>
          <div className="dropdown-item">Machine Entanglement</div>
          <div className="dropdown-item">Structural collapse</div>
          <div className="dropdown-item">Assault or workplace violence</div>
          <div className="dropdown-item">Chemical Spillage</div>
          <div className="dropdown-item">Electrical accident</div>
        </div>
      </div>
    );
}

export default riskTypes;