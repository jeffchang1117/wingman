import {
  RadioGroup,
  RadioItem,
  Stack,
  Strong,
  Text,
} from 'braid-design-system';
import React, { ComponentProps, forwardRef, useState } from 'react';

import {
  JobCategory,
  JobCategorySuggestionChoice,
} from '../../types/seek.graphql';
import { flattenResourceByKey } from '../../utils';

interface Props {
  choices: JobCategorySuggestionChoice[];
  onSelect?: (jobCategorySuggestionChoice: JobCategorySuggestionChoice) => void;
  showConfidence?: boolean;
  tone?: ComponentProps<typeof RadioGroup>['tone'];
}

const getJobCategoryName = (jobCategory: JobCategory): string =>
  flattenResourceByKey(jobCategory, 'parent')
    .reverse()
    .map((flatJobCategory: JobCategory) => flatJobCategory.name)
    .join(' > ');

const JobCategorySuggestChoices = forwardRef<HTMLInputElement, Props>(
  (
    { choices, onSelect, showConfidence = false, ...restProps },
    forwardedRef,
  ) => {
    const [selectedJobCategory, setSelectedJobCategory] = useState<
      JobCategory
    >();

    const handleChoiceSelect = (choice: JobCategorySuggestionChoice) => {
      setSelectedJobCategory(choice.jobCategory);
      if (onSelect) {
        onSelect(choice);
      }
    };

    return (
      <Stack space="small">
        <Text>
          <Strong>Select a job category</Strong>
        </Text>

        <RadioGroup
          id="job-category-suggest-select"
          onChange={(event) => handleChoiceSelect(event.currentTarget.value)}
          value={selectedJobCategory?.id.value ?? ''}
          {...restProps}
        >
          {choices.map((choice: JobCategorySuggestionChoice) => {
            const { jobCategory, confidence } = choice;
            const { id } = jobCategory;
            return (
              <RadioItem
                key={id.value}
                label={getJobCategoryName(jobCategory)}
                ref={forwardedRef}
                value={id.value}
              >
                {showConfidence && (
                  <Text tone="secondary" size="small">
                    <Strong>Confidence score:</Strong>{' '}
                    {`${(confidence * 100).toFixed(2)}%`}
                  </Text>
                )}
              </RadioItem>
            );
          })}
        </RadioGroup>
      </Stack>
    );
  },
);

export default JobCategorySuggestChoices;
