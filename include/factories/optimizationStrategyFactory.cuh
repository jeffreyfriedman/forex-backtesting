#ifndef STRATEGYFACTORY_H
#define STRATEGYFACTORY_H

#include <string>
#include "strategies/optimizationStrategy.cuh"
#include "strategies/reversalsOptimizationStrategy.cuh"
#include "types/configuration.cuh"

class OptimizationStrategyFactory {
    public:
        static OptimizationStrategy *create(char *name, char *symbol, std::map<std::string, int> *dataIndex, int group, Configuration *configuration);
};

#endif
