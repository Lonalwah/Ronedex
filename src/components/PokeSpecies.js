import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const PokeSpecies = ({ species }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (species !== null) {
      let texts = species.flavor_text_entries.filter(
        (e) => e.language.name === "en"
      );

      // Set random flavour text
      setDescription(
        texts[Math.floor(Math.random() * texts.length)].flavor_text
      );
    }
  }, [species]);

  return <pre>{description}</pre>;
};

PokeSpecies.propTypes = {
  species: PropTypes.object.isRequired,
};

export default PokeSpecies;
