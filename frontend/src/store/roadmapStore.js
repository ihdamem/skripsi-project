import create from 'zustand';
import { persist } from 'zustand/middleware';

const useRoadmapStore = create(
  persist((set, get) => ({
    length: 0,
    roadmaps: [],
    setRoadmaps: (roadmaps) =>
      set((state) => ({ roadmaps, length: state.roadmaps.length })),
    getRoadmap: (id) => {
      const roadmaps = get().roadmaps;
      return roadmaps.find((roadmap) => roadmap.id === id);
    },
    clearRoadmaps: () => set({ length: 0, roadmaps: [] }),
  }))
);

export default useRoadmapStore;
