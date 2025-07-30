import { useState } from 'react';
// Importing generic portraits and themed images. These images are generic representations
// and do not depict any specific real individual. They were generated for illustrative
// purposes only.
import gustavoOriginal from './assets/gustavo_original.png';
import gustavoTennis from './assets/gustavo_tennis.png';
import cristianOriginal from './assets/cristian_original.png';
import cristianPiano from './assets/cristian_piano.png';
import sergioOriginal from './assets/sergio_original.png';
import sergioPolitician from './assets/sergio_politician.png';
import eloyOriginal from './assets/eloy_original.png';
import eloyChef from './assets/eloy_chef.png';

/**
 * The gallery data structure defines each entry with its original and themed image.
 * The `showModified` boolean determines whether to display the themed version.
 */
const initialImages = {
  gustavo: {
    original: gustavoOriginal,
    modified: gustavoTennis,
    showModified: false,
  },
  cristian: {
    original: cristianOriginal,
    modified: cristianPiano,
    showModified: false,
  },
  sergio: {
    original: sergioOriginal,
    modified: sergioPolitician,
    showModified: false,
  },
  eloy: {
    original: eloyOriginal,
    modified: eloyChef,
    showModified: false,
  },
};

export default function App() {
  // Local state storing whether each image should show its themed version.
  const [images, setImages] = useState(initialImages);

  /**
   * Toggle between the original and themed image for a given key.
   * @param {string} key - The identifier for the person/image set.
   */
  const handleToggle = (key) => {
    setImages((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        showModified: !prev[key].showModified,
      },
    }));
  };

  return (
    <main className="min-h-screen py-8 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2 text-center">BCCl Gallery</h1>
      <p className="text-center max-w-md mb-6">
        Click on each portrait to reveal a themed version. All images are generic and used solely for demonstration.
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl">
        {Object.entries(images).map(([key, { original, modified, showModified }]) => (
          <button
            key={key}
            onClick={() => handleToggle(key)}
            className="focus:outline-none"
          >
            <img
              src={showModified ? modified : original}
              alt={showModified ? 'Themed portrayal' : 'Original portrait'}
              onClick={() => toggleImagen(persona.id)}
  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-md cursor-pointer transition-opacity duration-300 hover:opacity-75"
            />
          </button>
        ))}
      </div>
    </main>
  );
}
