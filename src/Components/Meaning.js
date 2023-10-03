import React from "react";

function Meaning({ data }) {
    return (
        <div className="word-meaning">
            <h2>{data.word}</h2>
            {data.phonetic && <p>{data.phonetic}</p>}
            {data.phonetics.length > 0 && 
              <div className="phonetics">
                  {data.phonetics.map((item) => {
                        return (
                            <div className="phonetic">
                                {item.audio && <audio src={item.audio} controls></audio>}
                                <p>{item.text}</p>
                            </div>
                        );
                  })}
              </div>
            }
            <div className="meanings">
                {data.meanings.map((item) => {
                    return (
                        <div className="meaning">
                            <h3>{item.partOfSpeech}</h3>
                            <ul className="definitions">
                                {item.definitions.map((val) => (
                                    <li>{val.definition}</li>
                                ))}
                            </ul>
                            {item.synonyms.length > 0 && (
                                <div className="synonyms">
                                    <h3>Synonyms</h3>
                                    <ul>
                                        {item.synonyms.map((val) => (
                                            <li>{val}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {item.antonyms.length > 0 && (
                                <div className="antonyms">
                                    <h3>Antonyms</h3>
                                    <ul>
                                        {item.antonyms.map((val) => (
                                            <li>{val}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Meaning;
