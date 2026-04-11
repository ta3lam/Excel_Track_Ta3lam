import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'excel-mastery-progress-v1';

interface ProgressState {
  completed: number[];
}

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completed: [] };
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.completed)) return parsed as ProgressState;
  } catch { /* ignore */ }
  return { completed: [] };
}

export function useProgress() {
  const [completed, setCompleted] = useState<number[]>(() => load().completed);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ completed }));
  }, [completed]);

  const markComplete = useCallback((id: number) => {
    setCompleted(prev => prev.includes(id) ? prev : [...prev, id]);
  }, []);

  const resetProgress = useCallback(() => setCompleted([]), []);

  return { completed, markComplete, resetProgress };
}
