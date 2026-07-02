const STORAGE_KEY = 'grp_culturas';

export function loadCultures(fallback) {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fallback));
    return fallback;
  }

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fallback));
    return fallback;
  }
}

export function saveCultures(cultures) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cultures));
}
