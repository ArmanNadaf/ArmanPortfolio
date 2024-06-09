import { CERTIFICATES } from "../constants";
import { motion } from "framer-motion";

const Certificates = () => {
  // Group certificates into pairs for two certificates per row
  const pairs = [];
  for (let i = 0; i < CERTIFICATES.length; i += 3) {
    const pair = CERTIFICATES.slice(i, i + 3);
    pairs.push(pair);
  }

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h1>
      <div>
        {pairs.map((pair, index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-center">
            {pair.map((certificate, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0 px-4"
              >
                <motion.div
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={certificate.img}
                    alt={certificate.title}
                    className="w-full h-auto"
                  />
                  <div className="px-6 py-4">
                    <h6 className="font-semibold text-lg mb-2 ">
                      {certificate.title}
                    </h6>
                    <p className="text-sm text-purple-800">
                      {certificate.institution}
                    </p>
                    <p className="text-sm text-purple-100">
                      {certificate.year}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
