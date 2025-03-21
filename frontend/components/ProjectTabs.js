export default function ProjectTabs({ projects, selectedProject, onSelectProject }) {
    return (
      <div style={styles.tabContainer}>
        {projects.map(project => (
          <button 
            key={project.id} 
            onClick={() => onSelectProject(project.id)}
            style={selectedProject === project.id ? styles.activeTab : styles.tab}
          >
            {project.name}
          </button>
        ))}
      </div>
    );
  }
  
  const styles = {
    tabContainer: { display: 'flex', borderBottom: '2px solid #ddd' },
    tab: { flex: 1, padding: '10px', border: 'none', background: '#eee', cursor: 'pointer' },
    activeTab: { flex: 1, padding: '10px', border: 'none', background: '#2196F3', color: 'white', cursor: 'pointer' }
  };