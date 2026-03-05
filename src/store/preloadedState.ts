export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (!serializedState) return undefined;

    const parsed = JSON.parse(serializedState);

    return {
      auth: {
        user: parsed.auth?.user ?? null,
        loading: false,
        error: null,
      },
      jobs: {
        jobs: parsed.jobs?.jobs ?? [],
      },
      applications: {
        applications: parsed.applications?.applications ?? [],
      },
    };
  } catch (err) {
    console.error("Failed to load state", err);
    return undefined;
  }
};