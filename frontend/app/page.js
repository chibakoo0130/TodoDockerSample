'use client';
import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import ProjectTabs from '@/components/ProjectTabs';
import TodoList from '@/components/TodoList';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(1);
  const projects = [
    { id: 1, name: 'プロジェクトA' },
    { id: 2, name: 'プロジェクトB' },
    { id: 3, name: 'やることC'}
  ];

  return (
    <div className={styles.container}>
      <Header />
      <ProjectTabs
        projects={projects}
        selectedProject={selectedProject}
        onSelectProject={setSelectedProject} />
      <TodoList projectId={selectedProject} />
      <BottomNav />
    </div>
  );
}

