export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  HistoryDate: string;
}

/** A physical address. */
export interface Address {
  __typename?: 'Address';
  /** The city or suburb of the address. */
  city?: Maybe<Scalars['String']>;
  /** The two-letter ISO 3166-1:2013 country code, in uppercase. */
  countryCode?: Maybe<Scalars['String']>;
  /**
   * An array of further divisions of the country.
   *
   * These may include districts, regions, states, provinces, etc.
   */
  countrySubDivisions: Array<AddressComponent>;
  /**
   * An array of additional address lines.
   *
   * These may include an apartment or suite number.
   */
  extendedLines: Array<AddressComponent>;
  /** The formatted representation of the whole address for display purposes. */
  formattedAddress?: Maybe<Scalars['String']>;
  /** The geographical coordinates of the address. */
  geoLocation?: Maybe<GeoLocation>;
  /** The street line address. */
  line?: Maybe<Scalars['String']>;
  /** The postal code of the address. */
  postalCode?: Maybe<Scalars['String']>;
}

/** An individual component of a physical address. */
export interface AddressComponent {
  __typename?: 'AddressComponent';
  /**
   * The type of the address component.
   *
   * Currently, the following components are defined:
   *
   * - `Apartment` indicates an address line for an apartment, unit or suite.
   * - `State` indicates a state or internal territory country subdivision.
   */
  type: Scalars['String'];
  /** The actual component value. */
  value: Scalars['String'];
}

/** An individual component of a physical address. */
export interface AddressComponentInput {
  /**
   * The type of the address component.
   *
   * Currently, the following components are defined:
   *
   * - `Apartment` indicates an address line for an apartment, unit or suite.
   * - `State` indicates a state or internal territory country subdivision.
   */
  type: Scalars['String'];
  /** The actual component value. */
  value: Scalars['String'];
}

/** A physical address. */
export interface AddressInput {
  /** The city or suburb of the address. */
  city: Scalars['String'];
  /** The two-letter ISO 3166-1:2013 country code, in uppercase. */
  countryCode: Scalars['String'];
  /**
   * An array of further divisions of the country.
   *
   * These may include districts, regions, states, provinces, etc.
   *
   * A maximum of 5 subdivisions may be provided.
   */
  countrySubDivisions: Array<AddressComponentInput>;
  /**
   * An array of additional address lines.
   *
   * These may include an apartment or suite number.
   *
   * A maximum of 5 extended lines may be provided.
   */
  extendedLines: Array<AddressComponentInput>;
  /**
   * The formatted representation of the whole address for display purposes.
   *
   * This field has a maximum length of 1,000 characters.
   */
  formattedAddress?: InputMaybe<Scalars['String']>;
  /** The geographical coordinates of the address. */
  geoLocation?: InputMaybe<GeoLocationInput>;
  /** The street line address. */
  line?: InputMaybe<Scalars['String']>;
  /**
   * The postal code of the address.
   *
   * This field has a maximum length of 50 characters.
   */
  postalCode: Scalars['String'];
}

/**
 * Advertisement branding details and images.
 *
 * This can be associated with one or more `PositionProfile`s when they are created.
 *
 * Branding images are visible to candidates searching for positions or viewing a job ad with this associated advertisement branding.
 */
export interface AdvertisementBranding {
  __typename?: 'AdvertisementBranding';
  /** The organization that has the advertisement branding. */
  hirer: HiringOrganization;
  /** The identifier for the `AdvertisementBranding`. */
  id: ObjectIdentifier;
  /** A list of images associated with the advertisement branding. */
  images: Array<AdvertisementBrandingImage>;
  /** The advertisement branding name. */
  name: Scalars['String'];
}

/** An advertisement branding in a paginated list. */
export interface AdvertisementBrandingEdge {
  __typename?: 'AdvertisementBrandingEdge';
  /**
   * The opaque cursor to advertisement branding.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual advertisement branding. */
  node: AdvertisementBranding;
}

/** A visual representation of advertisement branding. */
export interface AdvertisementBrandingImage {
  __typename?: 'AdvertisementBrandingImage';
  /**
   * The type of advertisement branding image.
   *
   * Currently, two codes are defined:
   *
   * - `OriginalLogo` indicates the original advertisement branding logo image from which other logo images are derived.
   *
   * - `CoverImage` indicates an optional cover image to be displayed on the top of job ads.
   */
  typeCode: Scalars['String'];
  /**
   * The URL of the advertisement branding image.
   *
   * This can be retrieved to visually identify an advertisement branding in a partner system.
   */
  url: Scalars['String'];
}

/** A page of advertisement brandings for a hirer. */
export interface AdvertisementBrandingsConnection {
  __typename?: 'AdvertisementBrandingsConnection';
  /**
   * A deep link to the SEEK employer website where the hirer can manage their brands.
   *
   * This field accepts browser tokens that include the `query:organizations` scope.
   */
  brandManagementUrl?: Maybe<WebUrl>;
  /**
   * The page of advertisement brandings and their corresponding cursors.
   *
   * This list may be empty.
   */
  edges: Array<AdvertisementBrandingEdge>;
  /** The pagination metadata for this page of advertisement brandings. */
  pageInfo: PageInfo;
}

/** The details of an available advertisement product. */
export interface AdvertisementProduct {
  __typename?: 'AdvertisementProduct';
  /** A short phrase intended for display to a user that describes the advertisement product. */
  description?: Maybe<Scalars['String']>;
  /** Additional information that is accepted when posting a job ad to configure the features of this advertisement product. */
  features: AdvertisementProductFeatures;
  /**
   * The identifier of this advertisement product.
   *
   * Identifiers may become stale, and should not be stored for long periods.
   *
   * It would be appropriate to save an identifier for use in a job ad draft, but not for use as a job ad template.
   */
  id: ObjectIdentifier;
  /**
   * The name of the advertisement product for displaying to the user.
   *
   * This is typically a single word that differentiates the product from other options.
   */
  label: Scalars['String'];
  /** Information about how payment will be made for this advertisement product. */
  payment?: Maybe<AdvertisementProductPaymentDetails>;
  /** Information about how much this advertisement product costs. */
  price?: Maybe<AdvertisementProductPriceDetails>;
  /**
   * Whether this advertisement product should be preselected or not.
   *
   * This field generally indicates the advertisement product that is set in the current state of an existing `PositionProfile`.
   */
  selected: Scalars['Boolean'];
  /** An array of short phrases that tell the user what value this advertisement product provides. */
  sellingPoints: Array<AdvertisementProductSellingPoint>;
}

/** Additional information that is accepted when posting a job ad with this advertisement product. */
export interface AdvertisementProductFeatures {
  __typename?: 'AdvertisementProductFeatures';
  /** Additional information related to branding that is accepted when posting a job ad. */
  branding?: Maybe<AdvertisementProductFeaturesBranding>;
  /** Additional information related to search bullet points that is accepted when posting a job ad. */
  searchBulletPoints?: Maybe<AdvertisementProductFeaturesSearchBulletPoints>;
}

/** Branding features that are included with a product when posting or updating a job ad. */
export interface AdvertisementProductFeaturesBranding {
  __typename?: 'AdvertisementProductFeatures_Branding';
  /** Whether the cover image from the provided `AdvertisementBranding` will be visible on the job ad. */
  coverImageIndicator: Scalars['Boolean'];
  /** Whether the logo from the provided `AdvertisementBranding` will be visible on the job ad. */
  logoIndicator: Scalars['Boolean'];
}

/** Search bullet points that are included with a product. */
export interface AdvertisementProductFeaturesSearchBulletPoints {
  __typename?: 'AdvertisementProductFeatures_SearchBulletPoints';
  /**
   * How many search bullet points are accepted when posting a job ad.
   *
   * This is always a positive integer; if bullet points are not supported, the entire object will be `null`.
   */
  limit: Scalars['Int'];
}

/** The details of how an advertisement product will be paid. */
export interface AdvertisementProductPaymentDetails {
  __typename?: 'AdvertisementProductPaymentDetails';
  /**
   * A plain text summary of how payment will be broken down across payment methods.
   *
   * This is a human-readable string intended for displaying in a user interface.
   */
  summary: Scalars['String'];
  /**
   * An alternate version of `summary` that includes HTML markup.
   *
   * This is intended to be parsed and rendered by a web browser for displaying in a user interface.
   */
  summaryHtml: Scalars['String'];
}

/** The details of what will be paid for an advertisement product. */
export interface AdvertisementProductPriceDetails {
  __typename?: 'AdvertisementProductPriceDetails';
  /**
   * The summary of what the price is for an advertisement product.
   *
   * This is a human-readable string intended for displaying in a user interface.
   */
  summary: Scalars['String'];
}

/**
 * A selling point of an advertisement product.
 *
 * This details a reason why a user should choose this advertisement product over another.
 */
export interface AdvertisementProductSellingPoint {
  __typename?: 'AdvertisementProductSellingPoint';
  /** The textual representation of this selling point for displaying to the user. */
  text: Scalars['String'];
}

/** A list of advertisement products with additional context that applies to all products. */
export interface AdvertisementProducts {
  __typename?: 'AdvertisementProducts';
  /**
   * Information on this set of available products.
   *
   * Typically this is a legal disclaimer.
   */
  information?: Maybe<Scalars['String']>;
  /** The list of advertisement products. */
  products: Array<AdvertisementProduct>;
}

/** The proposed state of the job ad to be posted or updated. */
export interface AdvertisementProductsPositionProfileInput {
  /**
   * An array of `JobCategory` identifiers.
   *
   * This field currently requires a single identifier for a child job category.
   */
  jobCategories: Array<Scalars['String']>;
  /**
   * The remuneration offered for the position.
   *
   * This information allows us to better forecast the performance of the advertisement products.
   */
  offeredRemunerationPackage?: InputMaybe<RemunerationPackageInput>;
  /**
   * An array of `Location` identifiers.
   *
   * Scheme requirements:
   *
   * - This field currently requires a single identifier for a location.
   */
  positionLocation: Array<Scalars['String']>;
  /**
   * Array of identifiers for the `HiringOrganization` that will post or update the job ad.
   *
   * The `seekAnz` scheme requires exactly one element.
   */
  positionOrganizations: Array<Scalars['String']>;
  /**
   * A short phrase describing the position as it would be listed on a business card or in a company directory.
   *
   * This field has a maximum length of 80 characters.
   */
  positionTitle: Scalars['String'];
  /**
   * The identifier of the job ad to be updated.
   *
   * It should be omitted when creating a new job.
   */
  profileId?: InputMaybe<Scalars['String']>;
  /**
   * A SEEK ANZ work type code.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * This information allows us to better forecast the performance of the advertisement products.
   */
  seekAnzWorkTypeCode?: InputMaybe<Scalars['String']>;
}

/**
 * A question from SEEK's library.
 *
 * This consists of label text displayed to a user and an input for them to select a response.
 */
export interface ApplicationLibraryQuestion {
  __typename?: 'ApplicationLibraryQuestion';
  /** The identifier for the `ApplicationLibraryQuestion`. */
  id: ObjectIdentifier;
  /** The way in which the response choices should be presented for selection. */
  preferenceSelection: ApplicationLibraryQuestionPreferenceSelection;
  /**
   * The collection of possible responses.
   *
   * - `MultiSelect` questions contain at least two elements.
   * - `SingleSelect` questions contain at least two elements.
   */
  responseChoice?: Maybe<Array<ApplicationLibraryQuestionChoice>>;
  /**
   * The type of the question response.
   *
   * Currently, two codes are defined:
   *
   * - `MultiSelect` for choosing one or more responses from `responseChoice`.
   * - `SingleSelect` for choosing a single response from `responseChoice`.
   */
  responseTypeCode: Scalars['String'];
  /** Text of the question displayed to the candidate. */
  text: Scalars['String'];
}

/** A possible response to an `ApplicationLibraryQuestion`. */
export interface ApplicationLibraryQuestionChoice {
  __typename?: 'ApplicationLibraryQuestionChoice';
  /** The identifier for the `ApplicationLibraryQuestionChoice`. */
  id: ObjectIdentifier;
  /** Text of the choice displayed to the candidate. */
  text: Scalars['String'];
}

/**
 * A question component of an `ApplicationQuestionnaire`.
 *
 * This consists of identifiers for the library question and its preferred response choices.
 */
export interface ApplicationLibraryQuestionInput {
  /**
   * The type of the component.
   *
   * This is always `Question`.
   */
  componentTypeCode: Scalars['String'];
  /**
   * The identifier of the library question or suggestion that the component is based on.
   *
   * If the library question was suggested via the `applicationLibraryQuestionSuggestions` query,
   * you should supply the `ApplicationLibraryQuestionSuggestion.id` rather than the `ApplicationLibraryQuestion.id`.
   *
   * If the library question was retrieved outside of a suggestion context,
   * you may supply its underlying `ApplicationLibraryQuestion.id`.
   */
  id: Scalars['String'];
  /**
   * The selected response choice identifiers for the question.
   *
   * The identifiers should be populated from available response choices within `ApplicationQuestion.responseChoice` returned with question suggestions.
   */
  selectedResponseChoice?: InputMaybe<Array<Scalars['String']>>;
}

/** The way in which the response choices should be presented for selection. */
export interface ApplicationLibraryQuestionPreferenceSelection {
  __typename?: 'ApplicationLibraryQuestionPreferenceSelection';
  /**
   * A human-readable description of the way in which the response choice selection will apply.
   *
   * For example, the message can be:
   *
   * - `I will only accept this answer`
   * - `I will accept any of these answers`
   * - `I will only accept this combination of answers`
   * - `I will accept above and including`
   * - `I will accept up to and including`
   * - `I will accept between this range`
   */
  message: Scalars['String'];
  /**
   * The way to present the response choice selection.
   *
   * Currently, three codes are defined:
   *
   * - `SingleChoice` indicates a question that expects a single preferred response choice.
   *
   *   A radio group or dropdown may be used.
   *
   * - `MultiChoice` indicates a question that expects multiple preferred response choices.
   *
   *   A checkbox group may be used.
   *
   * - `Range` indicates a question that expects two response choices representing the minimum and maximum preferred values.
   *
   *   A set of two dropdowns may be used.
   */
  typeCode: Scalars['String'];
}

/** A suggested question component. */
export interface ApplicationLibraryQuestionSuggestion {
  __typename?: 'ApplicationLibraryQuestionSuggestion';
  /**
   * The application question information of the suggestion.
   *
   * This will be a SEEK library question suitable for use in an application questionnaire.
   */
  applicationLibraryQuestion: ApplicationLibraryQuestion;
  /** The identifier for the `ApplicationLibraryQuestionSuggestion`. */
  id: ObjectIdentifier;
}

/** The input parameter for the `applicationLibraryQuestionSuggestions` query. */
export interface ApplicationLibraryQuestionSuggestionsPositionProfileInput {
  /**
   * An array of `JobCategory` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  jobCategories: Array<Scalars['String']>;
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions?: InputMaybe<
    Array<PositionFormattedDescriptionInput>
  >;
  /**
   * An array of `Location` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionLocation: Array<Scalars['String']>;
  /**
   * An array of identifiers for the `HiringOrganization`s that have the position.
   *
   * Scheme requirements:
   *
   * The `seekAnz` scheme requires exactly one element.
   */
  positionOrganizations: Array<Scalars['String']>;
  /**
   * The position title.
   *
   * This field has a maximum length of 80 characters.
   */
  positionTitle: Scalars['String'];
}

/** A method of applying to a position. */
export interface ApplicationMethod {
  __typename?: 'ApplicationMethod';
  /**
   * The email address that candidate applications are directed to.
   *
   * Do not select this in your operations,
   * or your integration will break when the field is removed.
   * @deprecated This is always `null` and has been replaced by Application Export
   */
  applicationEmail?: Maybe<Email>;
  /**
   * A URL of an external application form.
   *
   * When this is provided, SEEK's native apply form will be disabled and the candidate will be redirected to the supplied URL.
   */
  applicationUri?: Maybe<WebUrl>;
}

/** A method of applying to a position. */
export interface ApplicationMethodInput {
  /**
   * A URL of an external application form.
   *
   * When this is provided, SEEK's native apply form will be disabled and the candidate will link out to the supplied URL.
   * This requires that the hirer has an `HiringOrganizationApiCapabilities.applicationMethodCodes` that includes `ApplicationUri`.
   */
  applicationUri?: InputMaybe<WebUrlInput>;
}

/**
 * A privacy policy consent component of an `ApplicationQuestionnaire`.
 *
 * This consists of a URL for candidates to view the privacy policy and text to prompt the candidate as to whether or not they agree.
 *
 * The privacy policy consent component presents the candidate with a 'Yes' or 'No' choice.
 */
export interface ApplicationPrivacyConsent
  extends ApplicationQuestionnaireComponent {
  __typename?: 'ApplicationPrivacyConsent';
  /**
   * The type of the component.
   *
   * This is always `PrivacyConsent`.
   */
  componentTypeCode: Scalars['String'];
  /**
   * The HTML snippet to prompt the candidate for consent.
   *
   * Unsupported tags will be silently stripped when creating a questionnaire.
   *
   * This is optional and will default to 'Do you agree to the privacy policy?'.
   */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** The identifier for the `ApplicationQuestionnaireComponent`. */
  id: ObjectIdentifier;
  /** The URL of the privacy policy to show to the candidate. */
  privacyPolicyUrl: WebUrl;
  /**
   * A partner-provided unique ID for the question.
   *
   * This can be used to correlate the question back to its corresponding representation in your software.
   */
  value?: Maybe<Scalars['String']>;
}

/**
 * A privacy policy consent component of an `ApplicationQuestionnaire`.
 *
 * This consists of a URL for candidates to view the privacy policy and text to prompt the candidate as to whether or not they agree.
 *
 * The privacy policy consent component always defaults the available response choices for the candidate to 'Yes' and 'No'.
 */
export interface ApplicationPrivacyConsentInput {
  /**
   * The type of the component.
   *
   * This is always `PrivacyConsent`.
   */
  componentTypeCode: Scalars['String'];
  /**
   * The HTML snippet to prompt the candidate for consent.
   *
   * Unsupported tags will be silently stripped when creating a questionnaire.
   *
   * This is optional and will default to 'Do you agree to the privacy policy?'.
   */
  descriptionHtml?: InputMaybe<Scalars['String']>;
  /**
   * The URL of the privacy policy to show to the candidate.
   *
   * The `url` field has a maximum length of 1,000 characters.
   */
  privacyPolicyUrl: WebUrlInput;
  /**
   * A partner-provided unique ID for the consent component.
   *
   * This can be used to correlate the consent component back to its corresponding representation in your software.
   * This must be unique across all components in the questionnaire.
   */
  value?: InputMaybe<Scalars['String']>;
}

/** A candidate's response to a privacy policy consent component in the questionnaire. */
export interface ApplicationPrivacyConsentResponse
  extends ApplicationQuestionnaireComponentResponse {
  __typename?: 'ApplicationPrivacyConsentResponse';
  /** The privacy consent component this is responding to. */
  component: ApplicationPrivacyConsent;
  /**
   * The type of the component.
   *
   * This is always `PrivacyConsent`.
   */
  componentTypeCode: Scalars['String'];
  /** This indicates whether or not the candidate agrees to the provided privacy policy. */
  consentGivenIndicator: Scalars['Boolean'];
}

/**
 * A question component of an `ApplicationQuestionnaire`.
 *
 * This consists of label text displayed to a user and an input for them to select a response.
 */
export interface ApplicationQuestion extends ApplicationQuestionnaireComponent {
  __typename?: 'ApplicationQuestion';
  /**
   * The underlying library question that the component is based on.
   *
   * The availability of this field is dependent on `sourceCode`:
   *
   * - `Custom` is always null.
   * - `Library` is always non-null.
   */
  applicationLibraryQuestion?: Maybe<ApplicationLibraryQuestion>;
  /**
   * The type of the component.
   *
   * This is always `Question`.
   */
  componentTypeCode: Scalars['String'];
  /** The identifier for the `ApplicationQuestionnaireComponent`. */
  id: ObjectIdentifier;
  /**
   * The HTML snippet of the question being asked to the candidate.
   *
   * Unsupported tags will be silently stripped when creating a questionnaire.
   *
   * This field has a maximum length of 1,000 characters.
   */
  questionHtml: Scalars['String'];
  /**
   * The collection of possible responses.
   *
   * - `FreeText` must not contain any elements.
   * - `MultiSelect` must contain at least two elements.
   * - `SingleSelect` must contain at least two elements.
   */
  responseChoice?: Maybe<Array<ApplicationQuestionChoice>>;
  /**
   * The type of the question response.
   *
   * Currently, three codes are defined:
   *
   * - `FreeText` for a free text response.
   * - `MultiSelect` for choosing one or more responses from `responseChoice`.
   * - `SingleSelect` for choosing a single response from `responseChoice`.
   */
  responseTypeCode: Scalars['String'];
  /**
   * The source of the component.
   *
   * Currently, two codes are defined:
   *
   * - `Custom` indicates that the question was authored by the hirer.
   * - `Library` indicates that the question was sourced from SEEK's question library.
   */
  sourceCode: Scalars['String'];
  /**
   * A partner-provided unique ID for the question.
   *
   * This can be used to correlate the question back to its corresponding representation in your software.
   */
  value?: Maybe<Scalars['String']>;
}

/** A single answer to a question in the questionnaire. */
export interface ApplicationQuestionAnswer {
  __typename?: 'ApplicationQuestionAnswer';
  /**
   * The text value of the answer.
   *
   * For `FreeText` questions this may contain whitespace such as the `\n` newline escape sequence.
   * For readability, you should display [whitespace characters](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) instead of collapsing them.
   */
  answer: Scalars['String'];
  /**
   * The questionnaire choice for the answer.
   *
   * For `FreeText` questions this will be `null`.
   */
  choice?: Maybe<ApplicationQuestionChoice>;
}

/** A possible response to an `ApplicationQuestion`. */
export interface ApplicationQuestionChoice {
  __typename?: 'ApplicationQuestionChoice';
  /**
   * The underlying library question choice that the question choice is based on.
   *
   * The availability of this field is dependent on the parent `ApplicationQuestion.sourceCode`:
   *
   * - `Custom` is always null.
   * - `Library` is always non-null.
   */
  applicationLibraryQuestionChoice?: Maybe<ApplicationLibraryQuestionChoice>;
  /** The identifier for the `ApplicationQuestionChoice`. */
  id: ObjectIdentifier;
  /**
   * Whether this choice is preferred when scoring the answers.
   *
   * This is not displayed to the candidate.
   */
  preferredIndicator: Scalars['Boolean'];
  /**
   * Whether this choice was explicitly selected as a preference.
   *
   * When authoring a new questionnaire based on existing questions,
   * response choice selections may be prefilled from this indicator.
   *
   * - For a custom question, this always matches `preferredIndicator`.
   *
   * - For a library question, this is set for bounding preferences only.
   *
   *   For example, a library question may define choices 1–5,
   *   and require a minimum and maximum to be selected as a range preference.
   *   Selecting the range 2–4 will set `preferredIndicator` for choices 2, 3, and 4,
   *   and `selectedIndicator` for bounding choices 2 and 4.
   *
   * This is not displayed to the candidate.
   */
  selectedIndicator: Scalars['Boolean'];
  /** Text of the choice displayed to the candidate. */
  text: Scalars['String'];
  /**
   * A partner-provided unique ID for the question choice.
   *
   * This can be used to correlate the choice back to its corresponding representation in your software.
   */
  value?: Maybe<Scalars['String']>;
}

/** A possible response to an `ApplicationQuestion`. */
export interface ApplicationQuestionChoiceInput {
  /**
   * Whether this choice is preferred when scoring the answers.
   *
   * This is not displayed to the candidate.
   */
  preferredIndicator: Scalars['Boolean'];
  /**
   * Text of the choice displayed to the candidate.
   *
   * This must be unique across all choices in the question.
   */
  text: Scalars['String'];
  /**
   * A partner-provided unique ID for this choice.
   *
   * This can be used to correlate the choice back to its corresponding representation in your software.
   *
   * This must be unique across all choices in the question.
   */
  value?: InputMaybe<Scalars['String']>;
}

/**
 * A question component of an `ApplicationQuestionnaire`.
 *
 * This consists of label text displayed to a user and an input for them to select a response.
 */
export interface ApplicationQuestionInput {
  /**
   * The type of the component.
   *
   * This is always `Question`.
   */
  componentTypeCode: Scalars['String'];
  /**
   * The HTML snippet of the question being asked to the candidate.
   *
   * Unsupported tags will be silently stripped when creating a questionnaire.
   *
   * This field has a maximum length of 1,000 characters.
   */
  questionHtml: Scalars['String'];
  /**
   * The collection of possible responses.
   *
   * For `SingleSelect` and `MultiSelect` this must contain between 2 and 99 elements, inclusive.
   */
  responseChoice?: InputMaybe<Array<ApplicationQuestionChoiceInput>>;
  /**
   * The type of the question response.
   *
   * Currently, three codes are defined:
   *
   * - `FreeText` for a free text response.
   * - `MultiSelect` for choosing one or more responses from `responseChoice`.
   * - `SingleSelect` for choosing a single response from `responseChoice`.
   */
  responseTypeCode: Scalars['String'];
  /**
   * A partner-provided unique ID for this question.
   *
   * This can be used to correlate the question back to its corresponding representation in your software.
   * This must be unique across all components in the questionnaire.
   */
  value?: InputMaybe<Scalars['String']>;
}

/** A candidate's response to a question in the questionnaire. */
export interface ApplicationQuestionResponse
  extends ApplicationQuestionnaireComponentResponse {
  __typename?: 'ApplicationQuestionResponse';
  /**
   * The answers provided by the candidate.
   *
   * For `SingleSelect` and `FreeText` this will be a single element array.
   */
  answers: Array<ApplicationQuestionAnswer>;
  /** The question this is responding to. */
  component: ApplicationQuestion;
  /**
   * The type of the component.
   *
   * This is always `Question`.
   */
  componentTypeCode: Scalars['String'];
  /**
   * How well the candidate answered the question against the hirer's preferences.
   *
   * The score is calculated differently based on the `responseTypeCode`:
   *
   * - For `FreeText`, the score will be null.
   * - For `MultiSelect`, the score will be between 0 and 1 as a floating point.
   *   For example, if the candidate selected half of the preferred answers, the score would be 0.5.
   * - For `SingleSelect`, the score will be either 1 or 0 based off whether or not the candidate selected a preferred answer.
   */
  score?: Maybe<Scalars['Float']>;
}

/**
 * A set of questions presented to a candidate during an application.
 *
 * This can be associated with one or more `PositionProfile`s when they are created.
 */
export interface ApplicationQuestionnaire {
  __typename?: 'ApplicationQuestionnaire';
  /** The array of components in the order they are presented to the candidate. */
  components: Array<ApplicationQuestionnaireComponent>;
  /**
   * The hiring organization that created the questionnaire.
   *
   * The questionnaire can be attached to job ads posted by this organization.
   */
  hirer: HiringOrganization;
  /** The identifier for the `ApplicationQuestionnaire`. */
  id: ObjectIdentifier;
}

/**
 * A component of an application questionnaire.
 *
 * This only contains identifying metadata;
 * the `componentTypeCode` can be used to determine the concrete type of the component.
 */
export interface ApplicationQuestionnaireComponent {
  /**
   * The type of the component.
   *
   * Currently, two codes are defined:
   *
   * - `PrivacyConsent` which corresponds to the `ApplicationPrivacyConsent` type.
   * - `Question` which corresponds to the `ApplicationQuestion` type.
   */
  componentTypeCode: Scalars['String'];
  /** The identifier for the `ApplicationQuestionnaireComponent`. */
  id: ObjectIdentifier;
  /**
   * A partner-provided unique ID for the component.
   *
   * This can be used to correlate the component back to its corresponding representation in your software.
   */
  value?: Maybe<Scalars['String']>;
}

/** A component of the questionnaire to be created. */
export interface ApplicationQuestionnaireComponentInput {
  /**
   * The type of the component.
   *
   * Currently, two codes are defined:
   *
   * - `PrivacyConsent` corresponds to the `privacyConsent` field.
   * - `Question` corresponds to the `question` and `libraryQuestion` fields.
   */
  componentTypeCode: Scalars['String'];
  /**
   * A library question component of an `ApplicationQuestionnaire`.
   *
   * Either this or `question` must be provided if the `componentTypeCode` is `Question`.
   *
   * The SEEK library question is sourced from the `applicationLibraryQuestionSuggestions` query.
   */
  libraryQuestion?: InputMaybe<ApplicationLibraryQuestionInput>;
  /**
   * A privacy consent component of an `ApplicationQuestionnaire`.
   *
   * This must be provided if the `componentTypeCode` is `PrivacyConsent`.
   */
  privacyConsent?: InputMaybe<ApplicationPrivacyConsentInput>;
  /**
   * A question component of an `ApplicationQuestionnaire`.
   *
   * Either this or `libraryQuestion` must be provided if the `componentTypeCode` is `Question`.
   */
  question?: InputMaybe<ApplicationQuestionInput>;
}

/**
 * A response to a component in a questionnaire.
 *
 * This only contains metadata related to the component responded to in the questionnaire.
 * The implementation of a response is based on the `componentTypeCode` of its component.
 */
export interface ApplicationQuestionnaireComponentResponse {
  /** The component this is responding to. */
  component: ApplicationQuestionnaireComponent;
  /**
   * The type of the component.
   *
   * Currently, two codes are defined:
   *
   * - `PrivacyConsent` which corresponds to the `ApplicationPrivacyConsent` type.
   * - `Question` which corresponds to the `ApplicationQuestion` type.
   */
  componentTypeCode: Scalars['String'];
}

/** A completed candidate submission for an `ApplicationQuestionnaire`. */
export interface ApplicationQuestionnaireSubmission {
  __typename?: 'ApplicationQuestionnaireSubmission';
  /** The set of questions presented to the candidate during the application. */
  questionnaire: ApplicationQuestionnaire;
  /** The candidate's responses to the application's questionnaire. */
  responses: Array<ApplicationQuestionnaireComponentResponse>;
  /**
   * The indication of how well the candidate scored on the questionnaire overall.
   *
   * The score is a calculation between 0 and 1 as a floating point.
   * For example, if the candidate received a score of 1 on one question, and a score of 0 on another, this overall score would be calculated as 0.5.
   * If there are no scored questions this score will be null.
   */
  score?: Maybe<Scalars['Float']>;
}

/** The details of a position that a candidate is associated with. */
export interface AssociatedPositionOpening {
  __typename?: 'AssociatedPositionOpening';
  /**
   * Whether the candidate applied to this associated position.
   *
   * This is `false` for purchased profiles from the Proactive Sourcing use case.
   */
  candidateAppliedIndicator?: Maybe<Scalars['Boolean']>;
  /** The position opening that the candidate is associated with. */
  positionOpening: PositionOpening;
  /**
   * The identifier for the `PositionOpening`.
   *
   * This is included for HR-JSON compatibility;
   * GraphQL users should use the `positionOpening` nested object instead.
   */
  positionOpeningId: ObjectIdentifier;
  /**
   * A resource identifier for the position.
   *
   * This identifies the relevant position profile within the position opening.
   * It can be matched with the position profile `positionUri` field.
   *
   * - For candidate application profiles from the Application Export use case,
   *   this is the public web URL of the posted job ad.
   *
   * - For purchased candidate profiles from the Proactive Sourcing use case,
   *   this is the object identifier of the relevant unposted position profile.
   */
  positionUri: Scalars['String'];
}

/** A profile attachment stored at an external URL. */
export interface Attachment {
  __typename?: 'Attachment';
  /**
   * An array of human readable descriptions of the attachment.
   *
   * Resumes & cover letters can be programmatically identified using the  `seekRoleCode` field.
   */
  descriptions: Array<Scalars['String']>;
  /**
   * The identifier for the `Attachment`.
   *
   * This is unique across all attachments.
   */
  id: ObjectIdentifier;
  /**
   * The role of the attachment within a profile.
   * @deprecated Use seekRoleCode
   */
  seekRole?: Maybe<SeekAttachmentRole>;
  /**
   * The role of the attachment within a profile.
   *
   * Currently, three codes are defined:
   *
   * - `CoverLetter` is used for a candidate's cover letter for a specific position.
   * - `Resume` is used for a candidate's resume or CV.
   * - `SelectionCriteria` is used for a candidate's selection criteria for a specific position.
   *
   * Additional documents will have a `null` role code.
   * They can be distinguished by their free text `descriptions`.
   */
  seekRoleCode?: Maybe<Scalars['String']>;
  /**
   * A download URL for the attachment.
   *
   * This URL accepts partner tokens or browser tokens that include the `download:candidate-profile-attachments` scope.
   * This is guaranteed to be an absolute URL with an origin of `https://graphql.seek.com`.
   */
  url: Scalars['String'];
}

/**
 * A person who applied for a position at a company.
 *
 * If the same person applies to multiple hirers they will have distinct `Candidate` objects created.
 */
export interface Candidate {
  __typename?: 'Candidate';
  /** Instructions on how this candidate should be distributed. */
  distributionGuidelines: DistributionGuidelines;
  /**
   * The identifier for the `Candidate`.
   *
   * This is unique for a given hirer & person.
   */
  documentId: ObjectIdentifier;
  /**
   * Information to identify the person,
   * including their name and methods of communicating with the person.
   */
  person: CandidatePerson;
  /**
   * The list of profiles associated with with the candidate.
   *
   * Uploaded candidates sourced from the `uploadCandidate` mutation have a single profile.
   *
   * SEEK candidates have a profile per submitted application.
   * This field exposes up to 10 recent applications submitted by the candidate.
   *
   * We recommend querying specific applications by their `CandidateProfile.profileId`s for the Application Export use case.
   *
   * This field is redacted and an empty/filtered list is returned when a candidate or job application is deleted.
   */
  profiles: Array<CandidateProfile>;
  /**
   * The candidate's primary email address.
   *
   * The value is only set for candidates with `CandidateSource` value `PartnerUpload`.
   * Values will be unique within a given hirer.
   */
  seekPrimaryEmailAddress?: Maybe<Scalars['String']>;
}

/**
 * A person who applied for a position at a company.
 *
 * If the same person applies to multiple hirers they will have distinct `Candidate` objects created.
 */
export interface CandidateProfilesArgs {
  last?: InputMaybe<Scalars['Int']>;
}

/**
 * The event signaling that a candidate has applied for a `PositionOpening`.
 *
 * A candidate may apply for the same position opening more than once.
 * Each application will trigger a new event with a distinct `id`.
 */
export interface CandidateApplicationCreatedEvent extends Event {
  __typename?: 'CandidateApplicationCreatedEvent';
  /**
   * The `Candidate` that applied for the position opening.
   *
   * This will include the candidate's personal details along with all application profiles for a single hirer.
   *
   * This field is only accessible while you have an active `ApplicationExport` relationship with the hirer.
   * If this relationship has been removed, it will return null along with a `FORBIDDEN` error.
   */
  candidate?: Maybe<Candidate>;
  /**
   * The `CandidateProfile` associated with the application.
   *
   * This field is only accessible while you have an active `ApplicationExport` relationship with the hirer.
   * If this relationship has been removed, it will return null along with a `FORBIDDEN` error.
   */
  candidateApplicationProfile?: Maybe<CandidateProfile>;
  /**
   * The identifier for the specific `CandidateProfile` associated with the application.
   *
   * This can be used to retrieve structured candidate details with the `candidateProfile` query.
   */
  candidateApplicationProfileId: Scalars['String'];
  /** The identifier for the `Candidate` that applied for the position opening. */
  candidateId: Scalars['String'];
  /**
   * The date & time the application was accepted from the candidate.
   *
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /** The identifier for the `Event`. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * Currently, only the `seekAnz` and `seekAnzPublicTest` schemes emit `CandidateApplicationCreated` events.
   */
  schemeId: Scalars['String'];
  /** The type of event, i.e. `CandidateApplicationCreated`. */
  typeCode: Scalars['String'];
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/**
 * The event signaling that a candidate has applied for a `PositionOpening`.
 *
 * A candidate may apply for the same position opening more than once.
 * Each application will trigger a new event with a distinct `id`.
 */
export interface CandidateApplicationCreatedEventWebhookAttemptsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WebhookAttemptsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}

/** Information about a person not specific to a candidate profile. */
export interface CandidatePerson {
  __typename?: 'CandidatePerson';
  /** Methods of communication with the person. */
  communication: Communication;
  /** The person's name. */
  name: PersonName;
}

/** Information about a person not specific to a candidate profile. */
export interface CandidatePersonInput {
  /** Methods of communication with the person. */
  communication: CommunicationInput;
  /** The person's name. */
  name: PersonNameInput;
}

/** An action that can be executed as part of a workflow process. */
export interface CandidateProcessAction {
  __typename?: 'CandidateProcessAction';
  /**
   * The code of the action.
   *
   * Currently, the following action codes are defined:
   *
   * - `AgencySubmission`
   * - `CandidateWorkflowTransition`
   * - `Document`
   * - `Email`
   * - `Note`
   * - `PhoneCall`
   * - `PostPlacementActivity`
   * - `Screening`
   * - `StatusChange`
   * - `VerificationActivity`
   * - `Other`
   */
  code: Scalars['String'];
  /** The free-form description of the action. */
  description?: Maybe<Scalars['String']>;
  /**
   * A short human-readable name for the workflow step.
   *
   * This is non-null for a process history action of an uploaded candidate.
   */
  name?: Maybe<Scalars['String']>;
  /** A deep link to the action. */
  seekUrl?: Maybe<WebUrl>;
}

/** An action that can be executed as part of a workflow process. */
export interface CandidateProcessActionInput {
  /**
   * The code of the action.
   *
   * For process history actions, the following action codes are defined:
   *
   * - `AgencySubmission`
   * - `CandidateWorkflowTransition`
   * - `Document`
   * - `Email`
   * - `Note`
   * - `PhoneCall`
   * - `PostPlacementActivity`
   * - `Screening`
   * - `StatusChange`
   * - `VerificationActivity`
   * - `Other`
   *
   * For profile actions, one action code is defined:
   *
   * - `ViewProfile` indicates that the URL is used to view the candidate's profile.
   */
  code: Scalars['String'];
  /**
   * The free-form description of the action.
   *
   * This is required for a process history action of an uploaded candidate.
   *
   * This field has a maximum length of 1,000 characters.
   */
  description?: InputMaybe<Scalars['String']>;
  /**
   * A short human-readable name of the workflow process.
   *
   * This is required for a process history action of an uploaded candidate.
   */
  name?: InputMaybe<Scalars['String']>;
  /**
   * A deep link to the action.
   *
   * This is required for a profile action of an uploaded candidate.
   *
   * The `url` field has a maximum length of 1,000 characters.
   */
  seekUrl?: InputMaybe<WebUrlInput>;
}

/** A single item in a `CandidateProfile`'s workflow process history. */
export interface CandidateProcessHistoryItem {
  __typename?: 'CandidateProcessHistoryItem';
  /**
   * The executed action that constitutes this history item.
   *
   * This action may or may not trigger a change in the status of the underlying process.
   * For example, an action may be to add a note against a candidate's profile,
   * which has no material effect on the stage through the application process.
   */
  action: CandidateProcessAction;
  /** The date & time the action was executed. */
  actionDate: Scalars['DateTime'];
  /** The `CandidateProfile` that the `CandidateProcessHistoryItem` relates to. */
  candidateProfile: CandidateProfile;
  /** The identifier for the `CandidateProcessHistoryItem`. */
  id: ObjectIdentifier;
  /**
   * The position profile that the history item relates to.
   *
   * This is null for interactions that are not specific to an individual position,
   * such as a general interview with a recruiter.
   * It will also be null where an unknown `profileId` was provided or the position profile has since been deleted.
   */
  positionProfile?: Maybe<PositionProfile>;
  /** The parties that executed the action. */
  primaryParties: Array<CandidateProcessParty>;
  /**
   * The underlying source for the item.
   *
   * For example, items related to an application process would note the job board or other channel that sourced the application.
   */
  seekSource?: Maybe<SeekProcessHistoryItemSource>;
  /**
   * The current status of the underlying process.
   *
   * For example, a candidate in an application process may progress through a series of statuses like applied, interviewed, offered, hired.
   */
  status?: Maybe<CandidateProcessStatus>;
}

/** A page of candidate process history items. */
export interface CandidateProcessHistoryItemConnection {
  __typename?: 'CandidateProcessHistoryItemConnection';
  /**
   * The page of candidate process history items and their corresponding cursors.
   *
   * This list may be empty.
   */
  edges: Array<CandidateProcessHistoryItemEdge>;
  /** The pagination metadata for this page of candidate process history items. */
  pageInfo: PageInfo;
}

/** A candidate process history item in a paginated list. */
export interface CandidateProcessHistoryItemEdge {
  __typename?: 'CandidateProcessHistoryItemEdge';
  /**
   * The opaque cursor to the candidate process history item.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual candidate process history item. */
  node: CandidateProcessHistoryItem;
}

/** A single item in a `CandidateProfile`'s workflow process history. */
export interface CandidateProcessHistoryItemInput {
  /**
   * The executed action that constitutes this history item.
   *
   * This action may or may not trigger a change in the status of the underlying process.
   * For example, an action may be to add a note against a candidate's profile,
   * which has no material effect on the stage through the application process.
   */
  action: CandidateProcessActionInput;
  /** The date & time the action was executed. */
  actionDate: Scalars['DateTime'];
  /**
   * The position profile that the history item relates to.
   *
   * This is null for interactions that are not specific to an individual position,
   * such as a general interview with a recruiter.
   */
  positionProfile?: InputMaybe<CandidateProcessHistoryItemPositionProfileInput>;
  /**
   * The parties that executed the action.
   *
   * At least one party is required for a process history item of an uploaded candidate.
   * A maximum of 10 primary parties may be provided.
   */
  primaryParties: Array<CandidateProcessPartyInput>;
  /**
   * The underlying source for the item.
   *
   * For example, items related to an application process would note the job board or other channel that sourced the application.
   *
   * This is required if `positionProfile` is specified.
   */
  seekSource?: InputMaybe<SeekProcessHistoryItemSourceInput>;
  /**
   * The current status of the underlying process.
   *
   * For example, a candidate in an application process may progress through a series of statuses like applied, interviewed, offered, hired.
   */
  status?: InputMaybe<CandidateProcessStatusInput>;
}

/** A position profile associated with a workflow process. */
export interface CandidateProcessHistoryItemPositionProfileInput {
  /** The identifier for the `PositionProfile`. */
  profileId: Scalars['String'];
}

/**
 * A party that contributes to a workflow process.
 *
 * This may be a person, organization, or both.
 */
export interface CandidateProcessParty {
  __typename?: 'CandidateProcessParty';
  /** The organization that is contributing to the workflow process. */
  organization?: Maybe<Organization>;
  /** The individual person that is contributing to the workflow process. */
  person?: Maybe<SpecifiedPerson>;
}

/**
 * A party that contributes to a workflow process.
 *
 * This may be a person, organization, or both.
 */
export interface CandidateProcessPartyInput {
  /** The organization that is contributing to the workflow process. */
  organization?: InputMaybe<OrganizationInput>;
  /** The individual person that is contributing to the workflow process. */
  person?: InputMaybe<SpecifiedPersonInput>;
}

/** A status of a workflow process. */
export interface CandidateProcessStatus {
  __typename?: 'CandidateProcessStatus';
  /**
   * The code of the status of the underlying process.
   *
   * Currently, the following status codes are defined:
   *
   * - `AgencyShortlist`
   * - `AgencySubmission`
   * - `Application`
   * - `HirerShortlist`
   * - `Interview`
   * - `Offer`
   * - `ReferenceCheck`
   * - `Successful`
   * - `TestingOrQualificationsCheck`
   * - `Unsuccessful`
   */
  code: Scalars['String'];
}

/** A status of a workflow process. */
export interface CandidateProcessStatusInput {
  /**
   * The code of the status of the underlying process.
   *
   * Currently, the following status codes are defined:
   *
   * - `AgencyShortlist`
   * - `AgencySubmission`
   * - `Application`
   * - `HirerShortlist`
   * - `Interview`
   * - `Offer`
   * - `ReferenceCheck`
   * - `Successful`
   * - `TestingOrQualificationsCheck`
   * - `Unsuccessful`
   */
  code: Scalars['String'];
}

/** Structured information about a candidate in relation to a particular position. */
export interface CandidateProfile {
  __typename?: 'CandidateProfile';
  /**
   * The position openings associated with this candidate profile.
   * @deprecated Use associatedPositionProfile
   */
  associatedPositionOpenings: Array<AssociatedPositionOpening>;
  /**
   * The primary position profile for this candidate profile.
   *
   * This is a convenience field to avoid an extra hop through `associatedPositionOpenings`.
   *
   * - For candidate applications, this is the job ad that the candidate applied to.
   * - For purchased profiles, this is the unposted position profile that the purchase is scoped to.
   * - For uploaded candidate profiles, this is always `null`.
   */
  associatedPositionProfile?: Maybe<PositionProfile>;
  /**
   * The attachments related to the candidate's profile.
   *
   * This field is redacted and an empty list is returned when a candidate or job application is deleted.
   */
  attachments: Array<Attachment>;
  /**
   * The `Candidate` that this profile relates to.
   *
   * This contains the candidate's personal details along with all their profiles for the same hirer.
   */
  candidate: Candidate;
  /** The sources from which the candidate was obtained from. */
  candidateSources: Array<CandidateSource>;
  /**
   * The certifications and licenses the candidate holds.
   *
   * This field is redacted and an empty list is returned when a candidate or job application is deleted.
   */
  certifications: Array<Certification>;
  /** The date & time the candidate was associated with the position. */
  createDateTime: Scalars['DateTime'];
  /**
   * The education history of the candidate.
   *
   * This field is redacted and an empty list is returned when a candidate or job application is deleted.
   */
  education: Array<EducationAttendance>;
  /**
   * The employment history of the candidate.
   *
   * This field is redacted and an empty list is returned when a candidate or job application is deleted.
   */
  employment: Array<EmployerHistory>;
  /**
   * The candidate's preferences in an ideal position.
   *
   * This is only available for uploaded candidate profiles.
   * For candidate applications & purchased profiles this will be an empty list.
   */
  positionPreferences: Array<PositionPreference>;
  /**
   * The identifier for the `CandidateProfile`.
   *
   * This profile can be queried at any time by passing this identifier string to `candidateProfile`.
   */
  profileId: ObjectIdentifier;
  /**
   * The skills or competencies of the candidate.
   *
   * This field is redacted and an empty list is returned when a candidate or job application is deleted.
   */
  qualifications: Array<PersonCompetency>;
  /** A list of executable actions linked to the candidate profile. */
  seekActions: Array<CandidateProcessAction>;
  /**
   * The workflow process history of the candidate.
   *
   * A maximum of 20 process history items can be returned in a single page.
   * Additional items can be queried using a pagination cursor.
   *
   * This is null for non-uploaded candidates.
   */
  seekProcessHistory?: Maybe<CandidateProcessHistoryItemConnection>;
  /**
   * The completed candidate submission for the position profile's questionnaire.
   *
   * This field is redacted for a deleted candidate or job application.
   */
  seekQuestionnaireSubmission?: Maybe<ApplicationQuestionnaireSubmission>;
  /** The date & time the candidate profile was last updated. */
  updateDateTime: Scalars['DateTime'];
}

/** Structured information about a candidate in relation to a particular position. */
export interface CandidateProfileSeekProcessHistoryArgs {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}

/** The event signaling that a `CandidateProfile` has been purchased. */
export interface CandidateProfilePurchasedEvent extends Event {
  __typename?: 'CandidateProfilePurchasedEvent';
  /**
   * The `CandidateProfile` that was purchased.
   *
   * This field is only accessible while you have an active `ProactiveSourcing` relationship with the hirer.
   * If this relationship has been removed, it will return null along with a `FORBIDDEN` error.
   */
  candidateProfile?: Maybe<CandidateProfile>;
  /** The identifier for the `CandidateProfile` that was purchased. */
  candidateProfileId: Scalars['String'];
  /**
   * The date & time the `CandidateProfile` was purchased.
   *
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /** The identifier for the `Event`. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * Currently, only the `seekAnz` and `seekAnzPublicTest` schemes emit `CandidateProfilePurchased` events.
   */
  schemeId: Scalars['String'];
  /** The type of event, i.e. `CandidateProfilePurchased`. */
  typeCode: Scalars['String'];
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/** The event signaling that a `CandidateProfile` has been purchased. */
export interface CandidateProfilePurchasedEventWebhookAttemptsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WebhookAttemptsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}

/** A source from which the candidate was obtained from. */
export interface CandidateSource {
  __typename?: 'CandidateSource';
  /** Free text description of the source. */
  name: Scalars['String'];
  /**
   * The grouping that the source falls under.
   *
   * Currently, three types are defined:
   *
   * - `PartnerUpload` indicates that the candidate was uploaded to SEEK from a partner system.
   * - `SeekApplication` indicates that the candidate applied for a position on the SEEK job board.
   * - `SeekPurchase` indicates that the candidate profile was purchased from SEEK Talent Search.
   */
  type: Scalars['String'];
}

/** A certification or license held by the candidate. */
export interface Certification {
  __typename?: 'Certification';
  /**
   * Human readable descriptions of the certification.
   *
   * This can contain multiple descriptions from two different sources:
   *
   * 1. Free text descriptions provided by the candidate.
   * 2. Human readable descriptions automatically generated from SEEK's internal structured data.
   */
  descriptions: Array<Scalars['String']>;
  /**
   * The time period for which the certification is effective.
   *
   * This will be `null` if the expiration date is unknown or not provided.
   */
  effectiveTimePeriod?: Maybe<EffectiveTimePeriod>;
  /**
   * The date the certification was issued.
   *
   * This will be `null` if the issue date is unknown or not provided.
   * @deprecated Use `issued`.
   */
  issueDate?: Maybe<Scalars['HistoryDate']>;
  /**
   * The date the certification was last issued.
   *
   * This will be `null` if the issue date is unknown or not provided.
   */
  issued?: Maybe<Scalars['HistoryDate']>;
  /** The organization that issued the certification. */
  issuingAuthority?: Maybe<Organization>;
  /** The free text name of the certification. */
  name: Scalars['String'];
}

/** The input parameter for the `closePostedPositionProfile` mutation. */
export interface ClosePostedPositionProfileInput {
  /** The details of the position profile to be closed. */
  positionProfile: ClosePostedPositionProfilePositionProfileInput;
}

/** The output of the `closePostedPositionProfile` mutation. */
export interface ClosePostedPositionProfilePayload {
  __typename?: 'ClosePostedPositionProfilePayload';
  /** Attributes of the closed position profile. */
  positionProfile: ClosePostedPositionProfilePositionProfilePayload;
}

/** The details of the position profile to be closed. */
export interface ClosePostedPositionProfilePositionProfileInput {
  /** The identifier for the posted `PositionProfile` to be closed. */
  profileId: Scalars['String'];
}

/** Attributes of the closed position profile. */
export interface ClosePostedPositionProfilePositionProfilePayload {
  __typename?: 'ClosePostedPositionProfile_PositionProfilePayload';
  /** The identifier for the closed `PositionProfile`. */
  profileId: ObjectIdentifier;
}

/** Communication channels for a person. */
export interface Communication {
  __typename?: 'Communication';
  /**
   * An array of physical addresses for the person.
   *
   * The physical addresses are ordered in descending preference.
   *
   * This field is redacted and an empty array is returned when a candidate or job application is deleted.
   */
  address: Array<Address>;
  /**
   * An array of email addresses for the person.
   *
   * The email addresses are ordered in descending preference.
   *
   * This field is redacted and an empty array is returned when a candidate or job application is deleted.
   */
  email: Array<Email>;
  /**
   * An array of phone numbers for the person.
   *
   * The phone numbers are ordered in descending preference.
   *
   * This field is redacted and an empty array is returned when a candidate or job application is deleted.
   */
  phone: Array<Phone>;
  /**
   *  Whether the candidate must not be contacted by hirers.
   *
   * - For uploaded candidates from the Proactive Sourcing use case,
   *   this field may be set to prevent hirers from contacting them through SEEK Talent Search.
   *   A `null` value is treated the same as an explicit `false`.
   *
   * - For `PositionOpening` contact people from the Job Posting and Proactive Sourcing use cases,
   *   this field is always ignored.
   */
  seekDoNotContactIndicator?: Maybe<Scalars['Boolean']>;
}

/** Communication channels for a person. */
export interface CommunicationInput {
  /**
   * An array of physical addresses for the person.
   *
   * The physical addresses are ordered in descending preference.
   *
   * Between 0 and 5 physical addresses may be provided, inclusive.
   */
  address?: InputMaybe<Array<AddressInput>>;
  /**
   * An array of email addresses for the person.
   *
   * The email addresses are ordered in descending preference.
   *
   * A maximum of 5 email addresses may be provided.
   */
  email: Array<EmailInput>;
  /**
   * An array of phone numbers for the person.
   *
   * The phone numbers are ordered in descending preference.
   *
   * Between 0 and 5 phone numbers may be provided, inclusive.
   */
  phone: Array<PhoneInput>;
  /**
   * Whether the candidate must not be contacted by hirers.
   *
   * - For uploaded candidates from the Proactive Sourcing use case,
   *   this field may be set to prevent hirers from contacting them through SEEK Talent Search.
   *   A `null` value is treated the same as an explicit `false`.
   *
   * - For `PositionOpening` contact people from the Job Posting and Proactive Sourcing use cases,
   *   this field is always ignored.
   */
  seekDoNotContactIndicator?: InputMaybe<Scalars['Boolean']>;
}

/**
 * The input parameter for the `createApplicationQuestionnaire` mutation.
 *
 * This must not exceed 56 KiB in length.
 */
export interface CreateApplicationQuestionnaireInput {
  /** The details of the questionnaire to be created. */
  applicationQuestionnaire: CreateApplicationQuestionnaireApplicationQuestionnaireInput;
}

/** The response from the `createApplicationQuestionnaire` mutation. */
export interface CreateApplicationQuestionnairePayload {
  __typename?: 'CreateApplicationQuestionnairePayload';
  /** The details of the created questionnaire. */
  applicationQuestionnaire: ApplicationQuestionnaire;
}

/** The details of the questionnaire to be created. */
export interface CreateApplicationQuestionnaireApplicationQuestionnaireInput {
  /** The array of components in the order they are presented to the candidate. */
  components: Array<ApplicationQuestionnaireComponentInput>;
  /**
   * The identifier for the `HiringOrganization` that will own the questionnaire.
   *
   * Hirers can only associate position profiles with questionnaires they own.
   */
  hirerId: Scalars['String'];
}

/** The input parameter for the `createCandidateProcessHistoryItem` mutation. */
export interface CreateCandidateProcessHistoryItemInput {
  /** The details of the `CandidateProcessHistoryItem` to be added to the `CandidateProfile`. */
  candidateProcessHistoryItem: CreateCandidateProcessHistoryItemCandidateProcessHistoryItemInput;
  /** The details of the `CandidateProfile` that the `CandidateProcessHistoryItem` belongs to. */
  candidateProfile: CreateCandidateProcessHistoryItemCandidateProfileInput;
}

/** The response from the `createCandidateProcessHistoryItem` mutation. */
export type CreateCandidateProcessHistoryItemPayload =
  | CreateCandidateProcessHistoryItemPayloadConflict
  | CreateCandidateProcessHistoryItemPayloadSuccess;

/** The conflict result for the `createCandidateProcessHistoryItem` mutation. */
export interface CreateCandidateProcessHistoryItemPayloadConflict {
  __typename?: 'CreateCandidateProcessHistoryItemPayload_Conflict';
  /** The `CandidateProfile` that the `CandidateProcessHistoryItem` belongs to. */
  candidateProfile: CandidateProfile;
  /** The details of the conflicting `CandidateProcessHistoryItem`. */
  conflictingCandidateProcessHistoryItem: CandidateProcessHistoryItem;
}

/** The success result for the `createCandidateProcessHistoryItem` mutation. */
export interface CreateCandidateProcessHistoryItemPayloadSuccess {
  __typename?: 'CreateCandidateProcessHistoryItemPayload_Success';
  /** The details of the `CandidateProcessHistoryItem` created. */
  candidateProcessHistoryItem: CandidateProcessHistoryItem;
  /** The `CandidateProfile` that the `CandidateProcessHistoryItem` belongs to. */
  candidateProfile: CandidateProfile;
}

/** The candidate process history to create. */
export interface CreateCandidateProcessHistoryItemCandidateProcessHistoryItemInput {
  /**
   * The executed action that constitutes this history item.
   *
   * This action may or may not trigger a change in the status of the underlying process.
   * For example, an action may be to add a note against a candidate's profile,
   * which has no material effect on the stage through the application process.
   */
  action: CandidateProcessActionInput;
  /** The date & time the action was executed. */
  actionDate: Scalars['DateTime'];
  /**
   * An identifier to ensure that multiple candidate process history items are not created on retries.
   *
   * The identifier must be unique within the given candidate profile.
   * The same identifier must be provided when retrying after create failures.
   */
  idempotencyId: Scalars['String'];
  /**
   * The position profile that the history item relates to.
   *
   * This is null for interactions that are not specific to an individual position,
   * such as a general interview with a recruiter.
   */
  positionProfile?: InputMaybe<CandidateProcessHistoryItemPositionProfileInput>;
  /** The parties that executed the action. */
  primaryParties: Array<CandidateProcessPartyInput>;
  /**
   * The underlying source for the item.
   *
   * For example, items related to an application process would note the job board or other channel that sourced the application.
   *
   * This is required if `positionProfile` is specified.
   */
  seekSource?: InputMaybe<SeekProcessHistoryItemSourceInput>;
  /**
   * The current status of the underlying process.
   *
   * For example, a candidate in an application process may progress through a series of statuses like applied, interviewed, offered, hired.
   */
  status?: InputMaybe<CandidateProcessStatusInput>;
}

/** The candidate profile that the process history item belongs to. */
export interface CreateCandidateProcessHistoryItemCandidateProfileInput {
  /** The identifier for the `CandidateProfile` that the `CandidateProcessHistoryItem` relates to. */
  profileId: Scalars['String'];
}

/** The input parameter for the `createPositionOpening` mutation. */
export interface CreatePositionOpeningInput {
  /** The details of the position opening to be created. */
  positionOpening: CreatePositionOpeningPositionOpeningInput;
}

/** The response from the `createPositionOpening` mutation. */
export interface CreatePositionOpeningPayload {
  __typename?: 'CreatePositionOpeningPayload';
  /** The details of the created position opening. */
  positionOpening: PositionOpening;
}

/** The details of the position opening to be created. */
export interface CreatePositionOpeningPositionOpeningInput {
  /** The party that owns the position opening. */
  postingRequester: PostingRequesterInput;
  /**
   * An optional field for storing additional data with a `PositionOpening`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 characters.
   */
  seekPartnerMetadata?: InputMaybe<Scalars['String']>;
  /**
   * The status of the position opening.
   *
   * Defaults to `Active` if no value is provided.
   *
   * Currently, three codes are defined:
   *
   * - `Incomplete` indicates the position opening is in draft.
   * - `Active` indicates the position opening is open.
   * - `Closed` indicates the position opening has been closed.
   */
  statusCode?: InputMaybe<Scalars['String']>;
}

/** Information about how to post a job ad and where to direct its candidate applications. */
export interface CreatePostingInstructionInput {
  /**
   * An array of methods for applying to the position.
   *
   * If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
   * Native applications will emit a `CandidateApplicationCreated` event that points to a `CandidateProfile` object.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field is limited to a single element.
   *   Requests with more than 1 element will fail.
   */
  applicationMethods?: InputMaybe<Array<ApplicationMethodInput>>;
  /**
   * The identifier for the `AdvertisementBranding` to apply to the posted job ad.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field's behavior is dependent on the `SeekAnzAdProductFeatures` of the product set in the `seekAnzAdvertisementType` field.
   *
   *   When the product's `SeekAnzAdProductFeatures.brandingIndicator` value is false, this field will be silently ignored.
   */
  brandingId?: InputMaybe<Scalars['String']>;
  /**
   * The end date of the posting.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme this must be no more than 30 days in the future.
   *
   *   If an end date is omitted, the job ad will default to the maximum period of 30 calendar days.
   *   The precise end date can be queried from the `PostingInstruction.end` field once the job ad goes live.
   */
  end?: InputMaybe<Scalars['DateTime']>;
  /**
   * An identifier to ensure that multiple ads are not created on retries.
   *
   * A unique identifier needs to be generated by your software for each position profile.
   * The same identifier must be provided when retrying after create failures.
   * Your identifiers are isolated from and will not conflict with those generated by other recruitment software providers.
   */
  idempotencyId: Scalars['String'];
  /** The identifier for the `AdvertisementProduct`. */
  seekAdvertisementProductId?: InputMaybe<Scalars['String']>;
  /**
   * A SEEK ANZ advertisement type code.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic job ad.
   * - `StandOut` indicates a StandOut job ad.
   * - `Premium` indicates a Premium job ad.
   *
   * Scheme requirements:
   *
   * - This field is required for the `seekAnz` scheme.
   * - Omit this field for other schemes.
   */
  seekAnzAdvertisementType?: InputMaybe<Scalars['String']>;
}

/** The input parameter for the `createUnpostedPositionProfileForOpening` mutation. */
export interface CreateUnpostedPositionProfileForOpeningInput {
  /** An unposted profile of a position opening to create. */
  positionProfile: CreateUnpostedPositionProfileForOpeningPositionProfileInput;
}

/** The response from the `createUnpostedPositionProfileForOpening` mutation. */
export interface CreateUnpostedPositionProfileForOpeningPayload {
  __typename?: 'CreateUnpostedPositionProfileForOpeningPayload';
  /** Attributes of the newly created unposted position profile. */
  positionProfile: UnpostedPositionProfile;
}

/** An unposted profile of a position opening to create. */
export interface CreateUnpostedPositionProfileForOpeningPositionProfileInput {
  /**
   * An array of `JobCategory` identifiers.
   *
   * A maximum of 10 job categories may be provided.
   */
  jobCategories: Array<Scalars['String']>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackageInput;
  /**
   * An array of formatted position profile descriptions.
   *
   * A maximum of 10 formatted descriptions may be provided.
   */
  positionFormattedDescriptions: Array<PositionFormattedDescriptionInput>;
  /**
   * An array of `Location` identifiers.
   *
   * A maximum of 10 locations may be provided.
   */
  positionLocation: Array<Scalars['String']>;
  /** The identifier for the `PositionOpening` that this position profile belongs to. */
  positionOpeningId: Scalars['String'];
  /**
   * The identifier for the `HiringOrganization` that has the position.
   *
   * This should contain exactly one element that matches the position opening's `PostingRequester.id`.
   */
  positionOrganizations: Array<Scalars['String']>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   */
  positionScheduleTypeCodes?: InputMaybe<Array<Scalars['String']>>;
  /**
   * A short phrase describing the position as it would be listed on a business card or in a company directory.
   *
   * This field has a maximum length of 80 characters.
   */
  positionTitle: Scalars['String'];
  /**
   * A human-readable name given to the profile.
   *
   * This in addition to the `positionTitle` can help identify the profile to an end user.
   */
  profileName?: InputMaybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * SEEK does not use this field on unposted position profiles.
   *
   * This field has a maximum length of 50 characters.
   */
  seekBillingReference?: InputMaybe<Scalars['String']>;
  /**
   * An optional hirer-provided opaque job reference.
   *
   * This field has a maximum length of 50 characters.
   */
  seekHirerJobReference?: InputMaybe<Scalars['String']>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 characters.
   */
  seekPartnerMetadata?: InputMaybe<Scalars['String']>;
}

/** The input parameter for the `createWebhookSubscription` mutation. */
export interface CreateWebhookSubscriptionInput {
  /** The details of the webhook subscription to be created. */
  webhookSubscription: CreateWebhookSubscriptionSubscriptionInput;
}

/** The response from the `createWebhookSubscription` mutation. */
export type CreateWebhookSubscriptionPayload =
  | CreateWebhookSubscriptionPayloadConflict
  | CreateWebhookSubscriptionPayloadSuccess;

/**
 * The conflict result for the `createWebhookSubscription` mutation.
 *
 * Webhook subscriptions must have a unique combination of `eventTypeCode`, `schemeId`, `url` & `hirerId` fields.
 * Attempting to create a duplicate webhook subscription will result in a conflict.
 */
export interface CreateWebhookSubscriptionPayloadConflict {
  __typename?: 'CreateWebhookSubscriptionPayload_Conflict';
  /** The details of the conflicting webhook subscription. */
  conflictingWebhookSubscription: WebhookSubscription;
}

/** The success result for the `createWebhookSubscription` mutation. */
export interface CreateWebhookSubscriptionPayloadSuccess {
  __typename?: 'CreateWebhookSubscriptionPayload_Success';
  /** The details of the created webhook subscription. */
  webhookSubscription: WebhookSubscription;
}

/** The details of the webhook subscription to be created. */
export interface CreateWebhookSubscriptionSubscriptionInput {
  /**
   * The type of event to subscribe to.
   *
   * See `Event` implementations for a list of supported values.
   */
  eventTypeCode: Scalars['String'];
  /**
   * The optional hirer ID to receive events from.
   *
   * By default webhook subscriptions will send events from all hirers the partner has access to.
   * Providing a hirer ID will filter events to the specified hirer.
   */
  hirerId?: InputMaybe<Scalars['String']>;
  /**
   * The maximum number of events that will be sent in each HTTP request.
   *
   * This number must be between 1 and 10 inclusive. Defaults to 10.
   */
  maxEventsPerAttempt?: InputMaybe<Scalars['Int']>;
  /**
   * The data source for the event.
   *
   * Currently, only `seekAnz` and `seekAnzPublicTest` are supported.
   */
  schemeId: Scalars['String'];
  /**
   * The secret for signing webhooks.
   *
   * This must be specified if `signingAlgorithmCode` is not `None`.
   * It is used as the key to generate a message authentication code for each request.
   *
   * The secret should be a random string with high entropy that is not reused for any other purpose.
   *
   * This field has a maximum length of 255 bytes in UTF-8 encoding.
   */
  secret?: InputMaybe<Scalars['String']>;
  /**
   * The algorithm for signing webhooks.
   *
   * Currently, two codes are defined:
   *
   * - `None` indicates no signature will be attached.
   * - `SeekHmacSha512` indicates a HMAC SHA-512 hex digest will be attached to each request as a `Seek-Signature` header.
   *
   * A webhook's signature can be used to validate that the request originated from SEEK.
   *
   * Use a constant-time algorithm to validate the signature.
   * Regular comparison methods like the `==` operator are susceptible to timing attacks.
   */
  signingAlgorithmCode: Scalars['String'];
  /** The subscriber-owned URL where events will be sent to. */
  url: Scalars['String'];
}

/**
 * A currency supported by the SEEK API.
 *
 * This may be used when specifying a price or salary range.
 */
export interface Currency {
  __typename?: 'Currency';
  /** A three-letter ISO 4217 currency code, in uppercase. */
  code: Scalars['String'];
}

/**
 * A monetary amount expressed as an integer in a specified minor currency unit.
 *
 * This is used to avoid floating point rounding errors when expressing prices & funds.
 */
export interface CurrencyMinorUnit {
  __typename?: 'CurrencyMinorUnit';
  /** The three-letter ISO 4217 currency code, in uppercase. */
  currency: Scalars['String'];
  /**
   * A non-negative integer in the minor currency unit for the ISO currency code.
   *
   * For example, this is the number of cents in dollar-denominated currencies.
   */
  value: Scalars['Int'];
}

/** The input parameter for the `deleteCandidateProcessHistoryItem` mutation. */
export interface DeleteCandidateProcessHistoryItemInput {
  /** The details of the  `CandidateProcessHistoryItem` to be deleted. */
  candidateProcessHistoryItem: DeleteCandidateProcessHistoryItemCandidateProcessHistoryItemInput;
}

/** The response from the `deleteCandidateProcessHistoryItem` mutation. */
export interface DeleteCandidateProcessHistoryItemPayload {
  __typename?: 'DeleteCandidateProcessHistoryItemPayload';
  /** The details of the `CandidateProcessHistoryItem` that was deleted. */
  candidateProcessHistoryItem: CandidateProcessHistoryItem;
}

/** The details of the `CandidateProcessHistoryItem` to be deleted. */
export interface DeleteCandidateProcessHistoryItemCandidateProcessHistoryItemInput {
  /** The identifier for the `CandidateProcessHistoryItem` to be deleted. */
  id: Scalars['String'];
}

/** The input parameter for the `deletePositionOpening` mutation. */
export interface DeletePositionOpeningInput {
  /** The details of the position opening to be deleted. */
  positionOpening: DeletePositionOpeningPositionOpeningInput;
}

/** The response from the `deletePositionOpening` mutation. */
export interface DeletePositionOpeningPayload {
  __typename?: 'DeletePositionOpeningPayload';
  /** The details of the deleted position opening. */
  positionOpening: PositionOpening;
}

/** The details of the position opening to be deleted. */
export interface DeletePositionOpeningPositionOpeningInput {
  /** The identifier for the `PositionOpening` to be deleted. */
  documentId: Scalars['String'];
}

/** The input parameter for the `deleteUnpostedPositionProfile` mutation. */
export interface DeleteUnpostedPositionProfileInput {
  /** The details of the unposted position profile to be deleted. */
  positionProfile: DeleteUnpostedPositionProfilePositionProfileInput;
}

/** The response from the `deleteUnpostedPositionProfile` mutation. */
export interface DeleteUnpostedPositionProfilePayload {
  __typename?: 'DeleteUnpostedPositionProfilePayload';
  /** The details of the deleted unposted position profile. */
  positionProfile: UnpostedPositionProfile;
}

/** The details of the unposted position profile to be deleted. */
export interface DeleteUnpostedPositionProfilePositionProfileInput {
  /** The identifier for the unposted `PositionProfile`. */
  profileId: Scalars['String'];
}

/** The input parameter for the `deleteUploadedCandidate` mutation. */
export interface DeleteUploadedCandidateInput {
  /** The details of the uploaded `Candidate` to be deleted. */
  candidate: DeleteUploadedCandidateCandidateInput;
}

/** The response from the `deleteUploadedCandidate` mutation. */
export interface DeleteUploadedCandidatePayload {
  __typename?: 'DeleteUploadedCandidatePayload';
  /**
   * The details of the uploaded candidate that was deleted.
   *
   * The uploaded candidate profile is available in the `profiles` field.
   */
  candidate: Candidate;
}

/** The details of the uploaded candidate to be deleted. */
export interface DeleteUploadedCandidateCandidateInput {
  /** The identifier for the uploaded `Candidate` to be deleted. */
  documentId: Scalars['String'];
}

/** The input parameter for the `deleteWebhookSubscription` mutation. */
export interface DeleteWebhookSubscriptionInput {
  /** The details of the webhook subscription to be deleted. */
  webhookSubscription: DeleteWebhookSubscriptionSubscriptionInput;
}

/** The response from the `deleteWebhookSubscription` mutation. */
export interface DeleteWebhookSubscriptionPayload {
  __typename?: 'DeleteWebhookSubscriptionPayload';
  /** The details of the deleted webhook subscription. */
  webhookSubscription: WebhookSubscription;
}

/** The details of the webhook subscription to be deleted. */
export interface DeleteWebhookSubscriptionSubscriptionInput {
  /** The identifier for the `WebhookSubscription`. */
  id: Scalars['String'];
}

/** Instructions on how a candidate should be distributed. */
export interface DistributionGuidelines {
  __typename?: 'DistributionGuidelines';
  /**
   * The SEEK products that the candidate may be surfaced in.
   *
   * Currently, two codes are defined:
   *
   * - `CandidateManagement` indicates that the candidate may be viewed in SEEK Candidate Management.
   * - `ProactiveSourcing` indicates that the candidate may be viewed in SEEK Talent Search.
   */
  seekProductCodes: Array<Scalars['String']>;
}

/** Instructions on how a candidate should be distributed. */
export interface DistributionGuidelinesInput {
  /**
   * The SEEK products that the candidate may be surfaced in.
   *
   * Currently, one code is defined:
   *
   * - `ProactiveSourcing` indicates that the candidate may be viewed in SEEK Talent Search.
   */
  seekProductCodes: Array<Scalars['String']>;
}

/** The details documenting a person's attendance at an educational institution. */
export interface EducationAttendance {
  __typename?: 'EducationAttendance';
  /**
   * Additional free text descriptions of the person's attendance at the institution.
   *
   * This typically includes activities, honours, awards or specialities achieved during their study.
   */
  descriptions: Array<Scalars['String']>;
  /** The degrees which were awarded or in process at the institution. */
  educationDegrees: Array<EducationDegree>;
  /** The institution the person attended. */
  institution: Organization;
}

/** The details of a student's degree. */
export interface EducationDegree {
  __typename?: 'EducationDegree';
  /**
   * The date the degree was granted or is expected to be granted.
   *
   * This may only contain a year and optional month, e.g. `2020` or `2020-06`.
   * If the date isn't known this will be `null`.
   */
  date?: Maybe<Scalars['HistoryDate']>;
  /**
   * The granted status of the degree.
   *
   * Currently, two statuses are defined:
   *
   * - `InProgress` indicates the student is still completing the degree.
   * - `Granted` indicates the degree has been granted to the student.
   */
  degreeGrantedStatus: Scalars['String'];
  /** The name of the degree. */
  name: Scalars['String'];
}

/** A time period for which an associated object is effective. */
export interface EffectiveTimePeriod {
  __typename?: 'EffectiveTimePeriod';
  /**
   * The date which the associated object is no longer effective.
   *
   * For example, this corresponds to the expiry date of certifications.
   * This will be `null` if the associated object does not expire.
   */
  validTo?: Maybe<Scalars['HistoryDate']>;
}

/** An email address. */
export interface Email {
  __typename?: 'Email';
  /** The email address. */
  address: Scalars['String'];
}

/** An email address. */
export interface EmailInput {
  /**
   * The email address.
   *
   * This field has a maximum length of 255 bytes in UTF-8 encoding.
   */
  address: Scalars['String'];
}

/** The details of a person's employment, work, or relevant experience. */
export interface EmployerHistory {
  __typename?: 'EmployerHistory';
  /** The specific organization to which the person held positions. */
  organization: Organization;
  /** The set of positions that the person held. */
  positionHistories: Array<PositionHistory>;
}

/**
 * A signal that an action has been performed on the SEEK platform that may be of interest to an integration partner.
 *
 * Events can be delivered via:
 *
 * - Webhook, using the `createWebhookSubscription` mutation
 * - GraphQL polling, using the paginated `events` query
 */
export interface Event {
  /**
   * The date & time the event was created.
   *
   * This is commonly linked to the creation of an object that can be retrieved from the SEEK API.
   *
   * The data source for this field differs by event type and scheme.
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /** The identifier for the `Event`. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * Currently, only the `seekAnz` and `seekAnzPublicTest` schemes emit events.
   */
  schemeId: Scalars['String'];
  /**
   * The type of event.
   *
   * See `Event` implementations for a list of supported values.
   */
  typeCode: Scalars['String'];
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/**
 * A signal that an action has been performed on the SEEK platform that may be of interest to an integration partner.
 *
 * Events can be delivered via:
 *
 * - Webhook, using the `createWebhookSubscription` mutation
 * - GraphQL polling, using the paginated `events` query
 */
export interface EventWebhookAttemptsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WebhookAttemptsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}

/** An event in a stream. */
export interface EventEdge {
  __typename?: 'EventEdge';
  /**
   * The opaque cursor to the event in the stream.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual event. */
  node: Event;
  /**
   * The date & time the event was added to the stream.
   *
   * Initial `afterDateTime` and `beforeDateTime` filters apply to this field.
   */
  streamDateTime: Scalars['DateTime'];
}

/** A page of events from a stream. */
export interface EventsConnection {
  __typename?: 'EventsConnection';
  /** The page of events and their corresponding cursors. */
  edges: Array<EventEdge>;
  /** The pagination metadata for this page of events. */
  pageInfo: PageInfo;
}

/**
 * The criteria to filter events by.
 *
 * These are `Event`-specific extensions on top of the standard pagination arguments `before`, `after`, `first` and `last`.
 */
export interface EventsFilterInput {
  /**
   * The stream date & time that resulting events must succeed.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `EventsConnection`.
   */
  afterDateTime?: InputMaybe<Scalars['DateTime']>;
  /**
   * The stream date & time that resulting events must precede.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `EventsConnection`.
   */
  beforeDateTime?: InputMaybe<Scalars['DateTime']>;
  /**
   * Whether the event was successfully delivered via the specified webhook `subscriptionId`.
   *
   * This filter does not apply if `subscriptionId` is not specified.
   */
  deliveredIndicator?: InputMaybe<Scalars['Boolean']>;
  /**
   * The types of events to retrieve.
   *
   * See `Event` implementations for a list of supported values.
   */
  eventTypeCodes?: InputMaybe<Array<Scalars['String']>>;
  /**
   * The subscription stream to retrieve events from.
   *
   * This can be used in combination with `deliveredIndicator` to identify events that were not successfully delivered through a particular webhook subscription.
   *
   * Omit this field to consume events solely through GraphQL polling.
   * This will retrieve events from a persistent stream that is not associated with a webhook subscription.
   */
  subscriptionId?: InputMaybe<Scalars['String']>;
}

/** A geographical coordinate. */
export interface GeoLocation {
  __typename?: 'GeoLocation';
  /** The latitude of the geographical location. */
  latitude: Scalars['Float'];
  /** The longitude of the geographical location. */
  longitude: Scalars['Float'];
}

/** A geographical coordinate. */
export interface GeoLocationInput {
  /** The latitude of the geographical location. */
  latitude: Scalars['Float'];
  /** The longitude of the geographical location. */
  longitude: Scalars['Float'];
}

/** The event signaling that a hirer relationship has been added or removed. */
export interface HirerRelationshipChangedEvent extends Event {
  __typename?: 'HirerRelationshipChangedEvent';
  /**
   * The date & time the hirer relationship was changed.
   *
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /**
   * The optional hiring organization for whom the relationship was changed.
   *
   * This field is only accessible while you have an active relationship with the hirer.
   * If all relationships have been removed, it will return null along with a `FORBIDDEN` error.
   */
  hirer?: Maybe<HiringOrganization>;
  /** The identifier for the hiring organization for whom the relationship was changed. */
  hirerId: Scalars['String'];
  /** The identifier for the `Event`. */
  id: ObjectIdentifier;
  /**
   * The data source for the event.
   *
   * Currently, only the `seekAnz` and `seekAnzPublicTest` schemes emit `HirerRelationshipChanged` events.
   */
  schemeId: Scalars['String'];
  /** The type of event, i.e. `HirerRelationshipChanged`. */
  typeCode: Scalars['String'];
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/** The event signaling that a hirer relationship has been added or removed. */
export interface HirerRelationshipChangedEventWebhookAttemptsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WebhookAttemptsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}

/** An organization hiring for an open position. */
export interface HiringOrganization {
  __typename?: 'HiringOrganization';
  /** The identifier for the `HiringOrganization`. */
  id: ObjectIdentifier;
  /** The name of the hiring organization. */
  name: Scalars['String'];
  /**
   * The legacy SEEK ANZ advertiser ID.
   *
   * This is a numeric identifier used by legacy Job Posting & Application Export APIs in the `seekAnz` scheme.
   * For organizations in other schemes this will be `null`.
   */
  seekAnzAdvertiserId?: Maybe<Scalars['Int']>;
  /**
   * The capabilities of the requesting partner to act on behalf of the hiring organization.
   *
   * This will be `null` for agencies; the SEEK API does not support acting on behalf of an agency.
   */
  seekApiCapabilities?: Maybe<HiringOrganizationApiCapabilities>;
}

/**
 * The capabilities of the requesting partner to act on behalf of a hirer.
 *
 * This provides a read-only view of the configuration of a SEEK hirer for the current partner.
 */
export interface HiringOrganizationApiCapabilities {
  __typename?: 'HiringOrganizationApiCapabilities';
  /**
   * The supported methods of applying to job ads posted by the hirer.
   *
   * All SEEK hirers can use SEEK's native apply functionality by omitting the `ApplicationMethod` object when posting.
   * This enumerates additional application methods SEEK has configured for the hirer.
   *
   * Currently, one code is defined:
   *
   * - `ApplicationUri` indicates that job ads can link out to an external apply form.
   */
  applicationMethodCodes: Array<Scalars['String']>;
  /**
   * The active relationship types between the requesting partner and the hirer.
   *
   * Currently, three codes are defined:
   *
   * - `ApplicationExport` enables exporting candidate applications from SEEK's native apply functionality.
   *
   * - `JobPosting` enables posting job ads to the SEEK job board.
   *
   * - `ProactiveSourcing` enables hirers to proactively search for and connect with suitable candidates.
   */
  relationshipTypeCodes: Array<Scalars['String']>;
}

/** A hirer in a paginated list. */
export interface HiringOrganizationEdge {
  __typename?: 'HiringOrganizationEdge';
  /**
   * The opaque cursor to the hirer.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual hirer. */
  node: HiringOrganization;
}

/** A page of hirers. */
export interface HiringOrganizationsConnection {
  __typename?: 'HiringOrganizationsConnection';
  /** The page of hirers and their corresponding cursors. */
  edges: Array<HiringOrganizationEdge>;
  /** The pagination metadata for this page of hirers. */
  pageInfo: PageInfo;
}

/**
 * The criteria to filter hirers by.
 *
 * These are `HiringOrganization`-specific extensions on top of the standard pagination arguments `before`, `after`, `first` and `last`.
 */
export interface HiringOrganizationsFilterInput {
  /**
   * Filters on hirer names containing the provided case-insensitive substring.
   *
   * This is intended to support ad-hoc searches for hirers by name.
   */
  nameSearch?: InputMaybe<Scalars['String']>;
  /**
   * Filters on relationship types between the hirer and requesting partner.
   *
   * See the `HiringOrganizationApiCapabilities.relationshipTypeCodes` documentation for a list of relationship types.
   *
   * If this is not provided then all related hirers are returned.
   */
  relationshipTypeCodes?: InputMaybe<Array<Scalars['String']>>;
}

/** The input parameter for the `jobCategories` query. */
export interface JobCategoriesPositionProfileInput {
  /** An array of identifiers for the position's `Location`s. */
  positionLocation: Array<Scalars['String']>;
}

/** The category of a job's occupation. */
export interface JobCategory {
  __typename?: 'JobCategory';
  /**
   * An array of child job categories.
   *
   * These are more specific categories that belong to this general classification.
   */
  children?: Maybe<Array<JobCategory>>;
  /** The identifier for the `JobCategory`. */
  id: ObjectIdentifier;
  /** Name of the job category. */
  name: Scalars['String'];
  /**
   * The parent job category.
   *
   * This is a more general classification that this category belongs to.
   * It will be `null` for root categories that do not belong to a more general classification.
   */
  parent?: Maybe<JobCategory>;
}

/** A job category with information of the suggested choice. */
export interface JobCategorySuggestionChoice {
  __typename?: 'JobCategorySuggestionChoice';
  /**
   * The confidence in the returned job category based on the suggestion input.
   *
   * This is a floating point value ranging from 0 (lowest) to 1 (highest).
   */
  confidence: Scalars['Float'];
  /**
   * The job category information of the suggestion choice.
   *
   * This will be a child job category suitable for posting a position profile.
   */
  jobCategory: JobCategory;
}

/** The input parameter for the `jobCategorySuggestions` query. */
export interface JobCategorySuggestionPositionProfileInput {
  /**
   * The descriptions for the position profile.
   *
   * Currently, only the `AdvertisementDetails` description is used.
   * Other descriptions will be accepted but are ignored when determining the relevance of suggestion.
   *
   * The job category suggestion algorithm is designed to work with the complete advertisement details as they would appear on the final job ad.
   * Providing incomplete or placeholder text in this field may result in irrelevant suggestions.
   */
  positionFormattedDescriptions?: InputMaybe<
    Array<PositionFormattedDescriptionInput>
  >;
  /** An array of identifiers for the position's `Location`s. */
  positionLocation: Array<Scalars['String']>;
  /**
   * An array of identifiers for the `HiringOrganization`s that have the position.
   *
   * Information such as the organization's domicile can be used to refine the returned suggestions.
   */
  positionOrganizations?: InputMaybe<Array<Scalars['String']>>;
  /** The position title. */
  positionTitle: Scalars['String'];
}

/** A physical location with a persistent identifier. */
export interface Location {
  __typename?: 'Location';
  /**
   * An array of child locations.
   *
   * This is always `null` regardless of the existence of child locations.
   * @deprecated Not implemented.
   */
  children?: Maybe<Array<Location>>;
  /**
   * The contextual name of the location, e.g. "Richmond VIC 3121 AU".
   *
   * This name is sufficient to unambiguously identify the location to a hirer.
   */
  contextualName: Scalars['String'];
  /** The two-letter ISO 3166-1:2013 country code, in uppercase. */
  countryCode: Scalars['String'];
  /**
   * A list of currencies used within this location.
   *
   * Locations with unsupported currencies will default to a SEEK supported currency.
   *
   * At least one currency will be provided.
   *
   * As most countries only use a single currency, the first item in the array can be used to preselect the default currency in a job posting flow.
   */
  currencies: Array<Currency>;
  /** The identifier for the `Location`. */
  id: ObjectIdentifier;
  /**
   * The location name, e.g. "Richmond".
   *
   * This name is ambiguous without the context of its parent location.
   */
  name: Scalars['String'];
  /** The parent location. */
  parent?: Maybe<Location>;
}

/** A suggested location. */
export interface LocationSuggestion {
  __typename?: 'LocationSuggestion';
  /** Location information of the choice. */
  location: Location;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface Mutation {
  __typename?: 'Mutation';
  /**
   * A placeholder string.
   * @deprecated Placeholder only
   */
  _empty?: Maybe<Scalars['String']>;
  /**
   * Asynchronously closes a live job ad.
   *
   * The job ad will be removed from the job board and no refund will be issued.
   * The `PositionProfile` and its associated candidate applications will be available for 6 months after its close date.
   *
   * Once the job ad has been closed a `PositionProfileClosed` event will be emitted.
   */
  closePostedPositionProfile?: Maybe<ClosePostedPositionProfilePayload>;
  /**
   * Creates a new questionnaire.
   *
   * The `input` must not exceed 56 KiB in length.
   *
   * This mutation accepts browser tokens that include the `mutate:application-questionnaires` scope.
   */
  createApplicationQuestionnaire: CreateApplicationQuestionnairePayload;
  /** Adds a process history item to an uploaded candidate's profile. */
  createCandidateProcessHistoryItem: CreateCandidateProcessHistoryItemPayload;
  /**
   * Creates a new position opening.
   *
   * Every position profile belongs to a position opening.
   * Up to 25 position profiles may belong to the same position opening.
   */
  createPositionOpening: CreatePositionOpeningPayload;
  /**
   * Creates a new unposted position profile for an opening.
   *
   * If the position opening already contains 25 position profiles this will fail with a `BAD_USER_INPUT` error.
   */
  createUnpostedPositionProfileForOpening: CreateUnpostedPositionProfileForOpeningPayload;
  /** Creates a new webhook subscription. */
  createWebhookSubscription: CreateWebhookSubscriptionPayload;
  /** Deletes a candidate process history item from SEEK's systems. */
  deleteCandidateProcessHistoryItem?: Maybe<DeleteCandidateProcessHistoryItemPayload>;
  /**
   * Deletes an empty position opening.
   *
   * Each position profile that belongs to a position opening must be deleted before the position opening can be deleted.
   */
  deletePositionOpening?: Maybe<DeletePositionOpeningPayload>;
  /** Deletes an unposted position profile. */
  deleteUnpostedPositionProfile?: Maybe<DeleteUnpostedPositionProfilePayload>;
  /**
   * Deletes an uploaded candidate and their profile from SEEK's systems.
   *
   * This will also delete all `CandidateProcessHistoryItem`s belonging to the candidate profile.
   */
  deleteUploadedCandidate?: Maybe<DeleteUploadedCandidatePayload>;
  /** Deletes an existing webhook subscription. */
  deleteWebhookSubscription?: Maybe<DeleteWebhookSubscriptionPayload>;
  /**
   * Asynchronously posts a job ad for a new position opening.
   *
   * This combines the `createPositionOpening` & `postPositionProfileForOpening` mutations in a single operation.
   */
  postPosition: PostPositionPayload;
  /**
   * Asynchronously posts a job ad for an existing position opening.
   *
   * If the position opening already contains 25 position profiles this will fail with a `BAD_USER_INPUT` error.
   *
   * Once the job ad has been posted a `PositionProfilePosted` event will be emitted.
   */
  postPositionProfileForOpening: PostPositionProfileForOpeningPayload;
  /**
   * Replays a webhook subscription.
   *
   * This causes any matching events to be requeued for delivery.
   *
   * Resending occurs asynchronously in a background task.
   */
  replayWebhookSubscription?: Maybe<ReplayWebhookSubscriptionPayload>;
  /** Updates a candidate process history item. */
  updateCandidateProcessHistoryItem?: Maybe<UpdateCandidateProcessHistoryItemPayload>;
  /** Replaces an existing position opening's person contacts. */
  updatePositionOpeningPersonContacts?: Maybe<UpdatePositionOpeningPersonContactsPayload>;
  /**
   * Updates the status of a position opening.
   *
   * This status is provided to help hirers manage position openings.
   * The SEEK API does not use the position opening's status itself.
   */
  updatePositionOpeningStatus?: Maybe<UpdatePositionOpeningStatusPayload>;
  /**
   * Asynchronously updates a live job ad.
   *
   * The position profile's existing fields will be replaced with the provided input fields.
   * This will update the live job ad under its current URL.
   */
  updatePostedPositionProfile?: Maybe<UpdatePostedPositionProfilePayload>;
  /** Updates an existing unposted position profile. */
  updateUnpostedPositionProfile?: Maybe<UpdateUnpostedPositionProfilePayload>;
  /** Updates the personal details of an uploaded candidate. */
  updateUploadedCandidatePerson?: Maybe<UpdateUploadedCandidatePersonPayload>;
  /** Updates the actions associated with an uploaded candidate profile. */
  updateUploadedCandidateProfileActions?: Maybe<UpdateUploadedCandidateProfileActionsPayload>;
  /** Updates the dates associated with an uploaded candidate profile. */
  updateUploadedCandidateProfileDates?: Maybe<UpdateUploadedCandidateProfileDatesPayload>;
  /** Updates the position preferences associated with an uploaded candidate profile. */
  updateUploadedCandidateProfilePositionPreferences?: Maybe<UpdateUploadedCandidateProfilePositionPreferencesPayload>;
  /**
   * Updates an existing webhook subscription's delivery configuration.
   *
   * This modifies fields related to the URL and payload of an existing webhook subscription.
   * Changes may take up to half an hour to take effect.
   *
   * The fields that determine which events are to be delivered are immutable.
   * A new webhook subscription should be created for such cases.
   */
  updateWebhookSubscriptionDeliveryConfiguration?: Maybe<UpdateWebhookSubscriptionDeliveryConfigurationPayload>;
  /**
   * Updates an existing webhook subscription's signing configuration.
   *
   * This modifies fields related to the signature of an existing webhook subscription.
   * Changes may take up to half an hour to take effect.
   */
  updateWebhookSubscriptionSigningConfiguration?: Maybe<UpdateWebhookSubscriptionSigningConfigurationPayload>;
  /** Uploads a candidate and their profile into SEEK's systems. */
  uploadCandidate: UploadCandidatePayload;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationClosePostedPositionProfileArgs {
  input: ClosePostedPositionProfileInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationCreateApplicationQuestionnaireArgs {
  input: CreateApplicationQuestionnaireInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationCreateCandidateProcessHistoryItemArgs {
  input: CreateCandidateProcessHistoryItemInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationCreatePositionOpeningArgs {
  input: CreatePositionOpeningInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationCreateUnpostedPositionProfileForOpeningArgs {
  input: CreateUnpostedPositionProfileForOpeningInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationCreateWebhookSubscriptionArgs {
  input: CreateWebhookSubscriptionInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationDeleteCandidateProcessHistoryItemArgs {
  input: DeleteCandidateProcessHistoryItemInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationDeletePositionOpeningArgs {
  input: DeletePositionOpeningInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationDeleteUnpostedPositionProfileArgs {
  input: DeleteUnpostedPositionProfileInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationDeleteUploadedCandidateArgs {
  input: DeleteUploadedCandidateInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationDeleteWebhookSubscriptionArgs {
  input: DeleteWebhookSubscriptionInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationPostPositionArgs {
  input: PostPositionInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationPostPositionProfileForOpeningArgs {
  input: PostPositionProfileForOpeningInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationReplayWebhookSubscriptionArgs {
  input: ReplayWebhookSubscriptionInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateCandidateProcessHistoryItemArgs {
  input: UpdateCandidateProcessHistoryItemInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdatePositionOpeningPersonContactsArgs {
  input: UpdatePositionOpeningPersonContactsInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdatePositionOpeningStatusArgs {
  input: UpdatePositionOpeningStatusInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdatePostedPositionProfileArgs {
  input: UpdatePostedPositionProfileInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateUnpostedPositionProfileArgs {
  input: UpdateUnpostedPositionProfileInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateUploadedCandidatePersonArgs {
  input: UpdateUploadedCandidatePersonInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateUploadedCandidateProfileActionsArgs {
  input: UpdateUploadedCandidateProfileActionsInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateUploadedCandidateProfileDatesArgs {
  input: UpdateUploadedCandidateProfileDatesInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateUploadedCandidateProfilePositionPreferencesArgs {
  input: UpdateUploadedCandidateProfilePositionPreferencesInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateWebhookSubscriptionDeliveryConfigurationArgs {
  input: UpdateWebhookSubscriptionDeliveryConfigurationInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUpdateWebhookSubscriptionSigningConfigurationArgs {
  input: UpdateWebhookSubscriptionSigningConfigurationInput;
}

/**
 * The schema's entry-point for mutations.
 *
 * This acts as the public, top-level API from which all mutation queries must start.
 */
export interface MutationUploadCandidateArgs {
  input: UploadCandidateInput;
}

/**
 * An opaque identifier for GraphQL objects.
 *
 * The `value` has a maximum length of 255 characters,
 * and will always be representable with 255 bytes in UTF-8 encoding.
 */
export interface ObjectIdentifier {
  __typename?: 'ObjectIdentifier';
  /**
   * The identifier itself.
   *
   * This has a maximum length of 255 characters,
   * and will always be representable with 255 bytes in UTF-8 encoding.
   */
  value: Scalars['String'];
}

/** Basic information to identify and reference a specific organization. */
export interface Organization {
  __typename?: 'Organization';
  /** The human readable name of the organization. */
  name: Scalars['String'];
}

/** Basic information to identify and reference a specific organization. */
export interface OrganizationInput {
  /** The human readable name of the organization. */
  name: Scalars['String'];
}

/**
 * Pagination metadata for a result list.
 *
 * This is compliant with the _Relay Cursor Connections Specification_:
 *
 * <https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo>
 */
export interface PageInfo {
  __typename?: 'PageInfo';
  /** An opaque string cursor for retrieving the next page of results. */
  endCursor?: Maybe<Scalars['String']>;
  /** Whether there is a next page of results at the time of retrieval. */
  hasNextPage: Scalars['Boolean'];
  /** Whether there is a previous page of results at the time of retrieval. */
  hasPreviousPage: Scalars['Boolean'];
  /** An opaque string cursor for retrieving the previous page of results. */
  startCursor?: Maybe<Scalars['String']>;
}

/** A partner organization for a `self` query. */
export interface PartnerOrganization {
  __typename?: 'PartnerOrganization';
  /**
   * Whether the querying partner has been approved to self-service their live SEEK API client credentials.
   *
   * SEEK will approve partners once they have demonstrated progress through the development process.
   * When true, administrative users will be able to issue and rotate client credentials in the Developer Dashboard.
   */
  credentialSelfServiceApprovedIndicator: Scalars['Boolean'];
  /** The name of the querying partner. */
  name: Scalars['String'];
}

/** The primary method of payment and the interval in which it is paid for a position. */
export interface PayType {
  __typename?: 'PayType';
  /** A code classifying the primary method of payment for a position. */
  basisCode: Scalars['String'];
  /** A code classifying the interval the remuneration amounts are calculated over. */
  intervalCode: Scalars['String'];
  /** A human-readable description of the pay type. */
  label: Scalars['String'];
}

/** A skill or competency asserted by the candidate. */
export interface PersonCompetency {
  __typename?: 'PersonCompetency';
  /** The human readable name of the competency. */
  competencyName: Scalars['String'];
}

/** The name of a person including a breakdown of name components. */
export interface PersonName {
  __typename?: 'PersonName';
  /**
   * The family name (or surname) of a person, if provided.
   *
   * This field is redacted and a null value is returned when a candidate or job application is deleted.
   * This redaction is limited to candidate data objects within SEEK optimized apply.
   */
  family?: Maybe<Scalars['String']>;
  /**
   * The formatted name of a person, as it would be written out together.
   *
   * This field is redacted and a static 'redacted' text is returned when a candidate or job application is deleted.
   * This redaction is limited to candidate data objects within SEEK optimized apply.
   */
  formattedName: Scalars['String'];
  /**
   * The given name of a person, if provided.
   *
   * This field is redacted and a static 'redacted' text is returned when a candidate or job application is deleted.
   * This redaction is limited to candidate data objects within SEEK optimized apply.
   */
  given?: Maybe<Scalars['String']>;
}

/** The name of a person associated with an object. */
export interface PersonNameInput {
  /** The optional family name (or surname) of a person. */
  family?: InputMaybe<Scalars['String']>;
  /** The formatted name of a person, as it would be written out together. */
  formattedName: Scalars['String'];
  /** The optional given name of a person. */
  given?: InputMaybe<Scalars['String']>;
}

/** The phone number of a person. */
export interface Phone {
  __typename?: 'Phone';
  /** The phone number represented as a human readable string. */
  formattedNumber: Scalars['String'];
}

/** The phone number of a person. */
export interface PhoneInput {
  /** The phone number represented as a human readable string. */
  formattedNumber: Scalars['String'];
}

/** A formatted description of the position profile. */
export interface PositionFormattedDescription {
  __typename?: 'PositionFormattedDescription';
  /** The HTML content of the description. */
  content: Scalars['String'];
  /** The description type. */
  descriptionId: PositionFormattedDescriptionIdentifier;
}

/**
 * A description type identifier.
 *
 * This specifies the meaning of the description and determines where it's presented to the candidate.
 */
export interface PositionFormattedDescriptionIdentifier {
  __typename?: 'PositionFormattedDescriptionIdentifier';
  /**
   * The description type.
   *
   * Currently, three identifiers are defined:
   *
   * - `AdvertisementDetails` is the detailed description of the position that appears on the job ad.
   * - `SearchBulletPoint` is a highlight or selling point of the position that appears in search results.
   *   This will not appear on the job ad details page.
   *   SEEK ANZ allows up to three search bullet points when `SeekAnzAdProductFeatures`'s `searchBulletPointsIndicator` is true.
   * - `SearchSummary` is a short description that appears in search results.
   *   This will not appear on the job ad details page.
   */
  value: Scalars['String'];
}

/** A formatted description of the position profile. */
export interface PositionFormattedDescriptionInput {
  /**
   * The HTML content of the description.
   *
   * The maximum length differs by `descriptionId`:
   *
   *   - `AdvertisementDetails` has a maximum length of 15,000 characters.
   *   - `SearchBulletPoint` has a maximum length of 80 characters per bullet point.
   *   - `SearchSummary` has a maximum length of 150 characters.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme supports the following HTML tags in `AdvertisementDetails`:
   *
   *   - `a` (HTTPS only. Available on a per hirer basis. Hirer must contact SEEK to enable.)
   *   - `b`
   *   - `br`
   *   - `div`
   *   - `em`
   *   - `h2`
   *   - `li`
   *   - `ol`
   *   - `p`
   *   - `strong`
   *   - `ul`
   *
   *   Other descriptions will have all HTML tags stripped.
   */
  content: Scalars['String'];
  /**
   * The description type.
   *
   * Currently, three identifiers are defined:
   *
   * - `AdvertisementDetails` is the detailed description of the position that appears on the job ad.
   *
   * - `SearchBulletPoint` is a highlight or selling point of the position that appears in search results.
   *   SEEK ANZ allows up to three search bullet points when `SeekAnzAdProductFeatures.searchBulletPointsIndicator` is true.
   *   The length limit applies to each search bullet point separately.
   *
   * - `SearchSummary` is a short description that appears in search results.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires `AdvertisementDetails` and `SearchSummary` to be included.
   */
  descriptionId: Scalars['String'];
}

/** The details about a person's tenure within the position. */
export interface PositionHistory {
  __typename?: 'PositionHistory';
  /** Whether the person is still working at the organization, if known. */
  current?: Maybe<Scalars['Boolean']>;
  /** An array of descriptions of the person's responsibilities, skills and achievements in the position. */
  descriptions: Array<Scalars['String']>;
  /**
   * The end date of the position if known.
   *
   * This may only contain the year and month, e.g. `2020-01`.
   */
  end?: Maybe<Scalars['HistoryDate']>;
  /**
   * The start date of the position.
   *
   * This may only contain the year and month, e.g. `2019-01`.
   */
  start: Scalars['HistoryDate'];
  /** The title that the person held for this position. */
  title: Scalars['String'];
}

/**
 * A job requisition or position opening within an organization.
 *
 * This is a container object that groups multiple `PositionProfile`s together along with their owner.
 */
export interface PositionOpening {
  __typename?: 'PositionOpening';
  /** The identifier for the `PositionOpening`. */
  documentId: ObjectIdentifier;
  /**
   * A page of position profiles that belong to the opening.
   *
   * A maximum of 50 position profiles can be returned in a single page.
   * Additional position profiles can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known position profile if no pagination arguments are provided.
   */
  paginatedPositionProfiles: PositionProfileConnection;
  /**
   * An array of up to 25 profiles for the position opening.
   *
   * Each profile represents a posted job ad or an unposted internal requisition associated with this opening.
   * @deprecated There is no guarantee all profiles will be returned. Use paginatedPositionProfiles instead.
   */
  positionProfiles: Array<PositionProfile>;
  /**
   * The party that owns the position opening.
   *
   * This may be different from the hiring organization if the position opening was created by a recruitment agency outside of the SEEK API.
   */
  postingRequester: PostingRequester;
  /**
   * An optional field for storing additional data with a `PositionOpening`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 characters.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
  /**
   * The status of the position opening.
   *
   * Currently, three codes are defined:
   *
   * - `Incomplete` indicates the position opening is in a draft state.
   * - `Active` indicates the position opening is open.
   * - `Closed` indicates the position opening has been closed.
   */
  statusCode: Scalars['String'];
}

/**
 * A job requisition or position opening within an organization.
 *
 * This is a container object that groups multiple `PositionProfile`s together along with their owner.
 */
export interface PositionOpeningPaginatedPositionProfilesArgs {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}

/** A page of position openings. */
export interface PositionOpeningConnection {
  __typename?: 'PositionOpeningConnection';
  /**
   * The page of position openings and their corresponding cursors.
   *
   * This list may be empty.
   */
  edges: Array<PositionOpeningEdge>;
  /** The pagination metadata for this page of position openings. */
  pageInfo: PageInfo;
}

/** A position opening in a paginated list. */
export interface PositionOpeningEdge {
  __typename?: 'PositionOpeningEdge';
  /**
   * The opaque cursor to the position opening.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual position opening. */
  node: PositionOpening;
}

/**
 * The criteria to filter position openings by.
 *
 * These are `PositionOpening`-specific extensions on top of the standard pagination arguments `after` and `first`.
 */
export interface PositionOpeningsFilterInput {
  /**
   * Optionally filter results to only include position openings with the specified status code.
   *
   * Currently, three codes are defined:
   *
   * - `Incomplete` indicates the position opening is in a draft state.
   * - `Active` indicates the position opening is open.
   * - `Closed` indicates the position opening has been closed.
   */
  statusCode?: InputMaybe<Scalars['String']>;
}

/** A candidate's preferences in an ideal position. */
export interface PositionPreference {
  __typename?: 'PositionPreference';
  /**
   * An array of locations which are preferred by the candidate.
   *
   * The locations are ordered in descending preference.
   */
  locations: Array<PreferredLocation>;
}

/** A candidate's preferences in an ideal position. */
export interface PositionPreferenceInput {
  /**
   * An array of locations which are preferred by the candidate.
   *
   * The locations are ordered in descending preference.
   *
   * A maximum of 5 locations may be provided.
   */
  locations: Array<PreferredLocationInput>;
}

/**
 * A profile of a position opening.
 *
 * This contains information of how a position opening is presented on a job board or as an internal requisition.
 */
export interface PositionProfile {
  /** The occupational categories of the job. */
  jobCategories: Array<JobCategory>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackage;
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescription>;
  /** The locations of the position. */
  positionLocation: Array<Location>;
  /** The `PositionOpening` that this profile was created under. */
  positionOpening: PositionOpening;
  /** An array of identifiers for the `HiringOrganization`s that have the position. */
  positionOrganizations: Array<HiringOrganization>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * If the offered schedule isn't known this will be `null`.
   */
  positionScheduleTypeCodes?: Maybe<Array<Scalars['String']>>;
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /**
   * A unique resource identifier the position profile.
   *
   * - For posted position profiles, this is the public web URL of the posted job ad.
   *
   * - For unposted position profiles, this is the profile's object identifier.
   */
  positionUri: Scalars['String'];
  /** The instructions related to posting the job ad. */
  postingInstructions: Array<PostingInstruction>;
  /** The identifier for the `PositionProfile`. */
  profileId: ObjectIdentifier;
  /**
   * A work type code for the `seekAnz` scheme.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * For positions in other schemes this will be `null`.
   */
  seekAnzWorkTypeCode?: Maybe<Scalars['String']>;
  /**
   * The set of questions presented to candidates during an application.
   *
   * The questionnaire responses will be available as `CandidateProfile.seekQuestionnaireSubmission` on the candidate's application profile.
   */
  seekApplicationQuestionnaire?: Maybe<ApplicationQuestionnaire>;
  /**
   * An optional opaque billing reference.
   *
   * This appears on the invoice when SEEK bills the hirer for a job ad.
   */
  seekBillingReference?: Maybe<Scalars['String']>;
  /**
   * Whether the position profile was created by the requesting partner.
   *
   * If your software cannot ingest objects that are created by another source,
   * this can be used to filter out such position profiles.
   *
   * This indicator is unavailable where we cannot cheaply determine the source of the position profile.
   * `null` values should not be filtered out.
   * See specific implementations for further details.
   */
  seekCreatedBySelfIndicator?: Maybe<Scalars['Boolean']>;
  /** An optional hirer-provided opaque job reference. */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 characters.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
  /**
   * The type of position profile.
   *
   * See `PositionProfile` implementations for a list of supported values.
   */
  seekTypeCode: Scalars['String'];
  /** The video to render within the job ad. */
  seekVideo?: Maybe<SeekVideo>;
}

/** The event signaling that a posted `PositionProfile` has been closed. */
export interface PositionProfileClosedEvent extends Event {
  __typename?: 'PositionProfileClosedEvent';
  /**
   * The date & time the `PositionProfile` was closed.
   *
   * `PositionProfile`s are closed automatically when they reach their `PostingInstruction.end` date.
   * They can also be closed early using the `closePostedPositionProfile` mutation.
   *
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /** The identifier for the `Event`. */
  id: ObjectIdentifier;
  /**
   * The `PositionProfile` that was closed.
   *
   * This may return null if the `PositionProfile` has been closed for an extended period of time.
   *
   * This field is only accessible while you have an active `ApplicationExport` or `JobPosting` relationship with the hirer.
   * If these relationships have been removed, it will return null along with a `FORBIDDEN` error.
   */
  positionProfile?: Maybe<PostedPositionProfile>;
  /** The identifier for the `PositionProfile` that was closed. */
  positionProfileId: Scalars['String'];
  /**
   * The data source for the event.
   *
   * Currently, only the `seekAnz` and `seekAnzPublicTest` schemes emit `PositionProfileClosed` events.
   */
  schemeId: Scalars['String'];
  /** The type of event, i.e. `PositionProfileClosed`. */
  typeCode: Scalars['String'];
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/** The event signaling that a posted `PositionProfile` has been closed. */
export interface PositionProfileClosedEventWebhookAttemptsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WebhookAttemptsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}

/** A page of position profiles. */
export interface PositionProfileConnection {
  __typename?: 'PositionProfileConnection';
  /**
   * The page of position profiles and their corresponding cursors.
   *
   * This list may be empty.
   */
  edges: Array<PositionProfileEdge>;
  /** The pagination metadata for this page of position profiles. */
  pageInfo: PageInfo;
}

/** A position profile in a paginated list. */
export interface PositionProfileEdge {
  __typename?: 'PositionProfileEdge';
  /**
   * The opaque cursor to the position profile.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual position profile. */
  node: PositionProfile;
}

/** The event signaling that a `PositionProfile` has been posted. */
export interface PositionProfilePostedEvent extends Event {
  __typename?: 'PositionProfilePostedEvent';
  /**
   * The date & time the `PositionProfile` was considered as successfully posted inside of SEEK's internal systems.
   *
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /** The identifier for the `Event`. */
  id: ObjectIdentifier;
  /**
   * The `PositionProfile` that was posted.
   *
   * This may return null if the `PositionProfile` has been closed for an extended period of time.
   *
   * This field is only accessible while you have an active `ApplicationExport` or `JobPosting` relationship with the hirer.
   * If these relationships have been removed, it will return null along with a `FORBIDDEN` error.
   */
  positionProfile?: Maybe<PostedPositionProfile>;
  /** The identifier for the `PositionProfile` that was posted. */
  positionProfileId: Scalars['String'];
  /**
   * The data source for the event.
   *
   * Currently, only the `seekAnz` and `seekAnzPublicTest` schemes emit `PositionProfilePosted` events.
   */
  schemeId: Scalars['String'];
  /** The type of event, i.e. `PositionProfilePosted`. */
  typeCode: Scalars['String'];
  /**
   * A page of webhook attempts for the current event matching the specified criteria.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttempts: WebhookAttemptsConnection;
}

/** The event signaling that a `PositionProfile` has been posted. */
export interface PositionProfilePostedEventWebhookAttemptsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WebhookAttemptsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}

/** The information required to post a job ad for a newly created position. */
export interface PostPositionInput {
  /** The details of the position opening to be created. */
  positionOpening: CreatePositionOpeningPositionOpeningInput;
  /** A profile of a position opening. */
  positionProfile: PostPositionPositionProfileInput;
}

/** The response from the `postPosition` mutation. */
export type PostPositionPayload =
  | PostPositionPayloadConflict
  | PostPositionPayloadSuccess;

/**
 * The conflict result for the `postPosition` mutation.
 *
 * The  `idempotencyId` provided as part of `CreatePostingInstructionInput` while creating a position profile must be unique.
 * Providing the same `idempotencyId` will result in a conflict.
 */
export interface PostPositionPayloadConflict {
  __typename?: 'PostPositionPayload_Conflict';
  /** Attributes of the conflicting position opening. */
  conflictingPositionOpening: PostPositionPositionOpeningPayload;
  /** Attributes of the conflicting position profile. */
  conflictingPositionProfile: PostPositionPositionProfilePayload;
}

/** The success result for the `postPosition` mutation. */
export interface PostPositionPayloadSuccess {
  __typename?: 'PostPositionPayload_Success';
  /** Attributes of the newly created position opening. */
  positionOpening: PostPositionPositionOpeningPayload;
  /** Attributes of the newly created position profile for the job ad. */
  positionProfile: PostPositionPositionProfilePayload;
}

/** The input parameter for the `postPositionProfileForOpening` mutation. */
export interface PostPositionProfileForOpeningInput {
  /**
   * A profile for posting a job ad against an existing position opening.
   *
   * This contains information of how a position opening is presented on a given channel or job board.
   */
  positionProfile: PostPositionProfileForOpeningPositionProfileInput;
}

/** The response from the `postPositionProfileForOpening` mutation. */
export type PostPositionProfileForOpeningPayload =
  | PostPositionProfileForOpeningPayloadConflict
  | PostPositionProfileForOpeningPayloadSuccess;

/**
 * The conflict result for the `postPositionProfileForOpening` mutation.
 *
 * The  `idempotencyId` provided as part of `CreatePostingInstructionInput` while creating a position profile must be unique.
 * Providing the same `idempotencyId` will result in a conflict.
 */
export interface PostPositionProfileForOpeningPayloadConflict {
  __typename?: 'PostPositionProfileForOpeningPayload_Conflict';
  /** Attributes of the conflicting position profile. */
  conflictingPositionProfile: PostPositionProfileForOpeningPositionProfilePayload;
}

/** The success result for the `postPositionProfileForOpening` mutation. */
export interface PostPositionProfileForOpeningPayloadSuccess {
  __typename?: 'PostPositionProfileForOpeningPayload_Success';
  /** Attributes of the newly created position profile for the job ad. */
  positionProfile: PostPositionProfileForOpeningPositionProfilePayload;
}

/**
 * A profile for posting a job ad against an existing position opening.
 *
 * This contains information of how a position opening is presented on a given channel or job board.
 */
export interface PostPositionProfileForOpeningPositionProfileInput {
  /**
   * An array of `JobCategory` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one identifier for a child job category.
   */
  jobCategories: Array<Scalars['String']>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackageInput;
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescriptionInput>;
  /**
   * An array of `Location` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionLocation: Array<Scalars['String']>;
  /** The identifier for the `PositionOpening` that this position profile belongs to. */
  positionOpeningId: Scalars['String'];
  /**
   * An array of identifiers for the `HiringOrganization`s that have the position.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element that matches the position opening's `PostingRequester.id`.
   */
  positionOrganizations: Array<Scalars['String']>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * Omit this field for the `seekAnz` scheme.
   */
  positionScheduleTypeCodes?: InputMaybe<Array<Scalars['String']>>;
  /**
   * A short phrase describing the position as it would be listed on a business card or in a company directory.
   *
   * This field has a maximum length of 80 characters.
   */
  positionTitle: Scalars['String'];
  /**
   * The instructions related to posting the job ad.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  postingInstructions: Array<CreatePostingInstructionInput>;
  /**
   * A SEEK ANZ work type code.
   *
   * For positions in `seekAnz` scheme, this field is used instead of `positionScheduleTypeCodes`.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * Scheme requirements:
   *
   * - This field is required for the `seekAnz` scheme.
   * - Omit this field for other schemes.
   */
  seekAnzWorkTypeCode?: InputMaybe<Scalars['String']>;
  /**
   * The identifier for the `ApplicationQuestionnaire` to present to a candidate during their application.
   *
   * The questionnaire responses will be available as `CandidateProfile.seekQuestionnaireSubmission` on the candidate's application profile.
   *
   * SEEK questionnaires are only supported on our native apply form;
   * omit this field if an `ApplicationMethodInput.applicationUri` is provided.
   */
  seekApplicationQuestionnaireId?: InputMaybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * This appears on the invoice when SEEK bills the hirer for the job ad.
   *
   * This field has a maximum length of 50 characters.
   */
  seekBillingReference?: InputMaybe<Scalars['String']>;
  /**
   * An optional hirer-provided opaque job reference.
   *
   * This field has a maximum length of 50 characters.
   */
  seekHirerJobReference?: InputMaybe<Scalars['String']>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 characters.
   */
  seekPartnerMetadata?: InputMaybe<Scalars['String']>;
  /** The video to render within the job ad. */
  seekVideo?: InputMaybe<SeekVideoInput>;
}

/** Attributes of the position profile. */
export interface PostPositionProfileForOpeningPositionProfilePayload {
  __typename?: 'PostPositionProfileForOpening_PositionProfilePayload';
  /** The identifier for the `PositionProfile`. */
  profileId: ObjectIdentifier;
}

/** Attributes of the position opening. */
export interface PostPositionPositionOpeningPayload {
  __typename?: 'PostPosition_PositionOpeningPayload';
  /**
   * The identifier for the `PositionOpening`.
   *
   * Scheme restrictions:
   *
   * - The `seekAnz` scheme creates the position opening asynchronously.
   *   This identifier will initially reference a missing object;
   *   the object should be created within a few minutes.
   */
  documentId: ObjectIdentifier;
}

/** The details of the position profile to be created. */
export interface PostPositionPositionProfileInput {
  /**
   * An array of `JobCategory` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one identifier for a child job category.
   */
  jobCategories: Array<Scalars['String']>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackageInput;
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescriptionInput>;
  /**
   * An array of `Location` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionLocation: Array<Scalars['String']>;
  /**
   * An array of identifiers for the `HiringOrganization`s that have the position.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element that matches the position opening's `PostingRequester.id`.
   */
  positionOrganizations: Array<Scalars['String']>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * Omit this field for the `seekAnz` scheme.
   */
  positionScheduleTypeCodes?: InputMaybe<Array<Scalars['String']>>;
  /**
   * A short phrase describing the position as it would be listed on a business card or in a company directory.
   *
   * This field has a maximum length of 80 characters.
   */
  positionTitle: Scalars['String'];
  /**
   * The instructions related to posting the job ad.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  postingInstructions: Array<CreatePostingInstructionInput>;
  /**
   * A SEEK ANZ work type code.
   *
   * For positions in `seekAnz` scheme, this field is used instead of `positionScheduleTypeCodes`.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * Scheme requirements:
   *
   * - This field is required for the `seekAnz` scheme.
   * - Omit this field for other schemes.
   */
  seekAnzWorkTypeCode?: InputMaybe<Scalars['String']>;
  /**
   * The identifier for the `ApplicationQuestionnaire` to present to a candidate during their application.
   *
   * The questionnaire responses will be available as `CandidateProfile.seekQuestionnaireSubmission` on the candidate's application profile.
   *
   * SEEK questionnaires are only supported on our native apply form;
   * omit this field if an `ApplicationMethodInput.applicationUri` is provided.
   */
  seekApplicationQuestionnaireId?: InputMaybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * This appears on the invoice when SEEK bills the hirer for the job ad.
   *
   * This field has a maximum length of 50 characters.
   */
  seekBillingReference?: InputMaybe<Scalars['String']>;
  /**
   * An optional hirer-provided opaque job reference.
   *
   * This field has a maximum length of 50 characters.
   */
  seekHirerJobReference?: InputMaybe<Scalars['String']>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 characters.
   */
  seekPartnerMetadata?: InputMaybe<Scalars['String']>;
  /** The video to render within the job ad. */
  seekVideo?: InputMaybe<SeekVideoInput>;
}

/** Attributes of the position profile. */
export interface PostPositionPositionProfilePayload {
  __typename?: 'PostPosition_PositionProfilePayload';
  /**
   * The identifier for the `PositionProfile`.
   *
   * Scheme restrictions:
   *
   * - The `seekAnz` scheme creates the position profile asynchronously.
   *   This identifier will initially reference a missing object;
   *   the object should be created within a few minutes.
   */
  profileId: ObjectIdentifier;
}

/**
 * A profile of a position opening.
 *
 * This contains information of how a position opening is presented on a job board.
 */
export interface PostedPositionProfile extends PositionProfile {
  __typename?: 'PostedPositionProfile';
  /** The occupational categories of the job. */
  jobCategories: Array<JobCategory>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackage;
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescription>;
  /** The locations of the position. */
  positionLocation: Array<Location>;
  /** The `PositionOpening` that this profile was created under. */
  positionOpening: PositionOpening;
  /** An array of identifiers for the `HiringOrganization`s that have the position. */
  positionOrganizations: Array<HiringOrganization>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * If the offered schedule isn't known this will be `null`.
   */
  positionScheduleTypeCodes?: Maybe<Array<Scalars['String']>>;
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /** The public web URL of the posted job ad on SEEK. */
  positionUri: Scalars['String'];
  /** The instructions related to posting the job ad. */
  postingInstructions: Array<PostingInstruction>;
  /** The identifier for the `PositionProfile`. */
  profileId: ObjectIdentifier;
  /**
   * A work type code for the `seekAnz` scheme.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * For positions in other schemes this will be `null`.
   */
  seekAnzWorkTypeCode?: Maybe<Scalars['String']>;
  /**
   * The set of questions presented to candidates during an application.
   *
   * The questionnaire responses will be available as `CandidateProfile.seekQuestionnaireSubmission` on the candidate's application profile.
   */
  seekApplicationQuestionnaire?: Maybe<ApplicationQuestionnaire>;
  /**
   * The public web URL to submit an application for the posted job ad on SEEK.
   *
   * This is null for job ads that use a link-out application method.
   */
  seekApplicationUri?: Maybe<WebUrl>;
  /**
   * An optional opaque billing reference.
   *
   * This appears on the invoice when SEEK bills the hirer for the job ad.
   */
  seekBillingReference?: Maybe<Scalars['String']>;
  /**
   * Whether the job ad was initially posted by the requesting partner.
   *
   * If your software cannot ingest objects that are created by another source,
   * this can be used to filter out such job ads and their associated applications.
   *
   * This indicator is unavailable for job ads posted before September 2021.
   * `null` values should not be filtered out.
   */
  seekCreatedBySelfIndicator?: Maybe<Scalars['Boolean']>;
  /** An optional hirer-provided opaque job reference. */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 characters.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
  /** The type of position profile, i.e. `PostedPositionProfile`. */
  seekTypeCode: Scalars['String'];
  /** The video to render within the job ad. */
  seekVideo?: Maybe<SeekVideo>;
}

/** The details of a job ad preview. */
export interface PostedPositionProfilePreview {
  __typename?: 'PostedPositionProfilePreview';
  /**
   * The URL of a standalone webpage to preview a job ad, with an origin of `job-ad-preview.seek.com`.
   *
   * The page can be embedded in an iframe or opened in a new tab.
   *
   * The webpage will expire after 24 hours.
   */
  previewUri: WebUrl;
}

/** The details of the position profile to be previewed. */
export interface PostedPositionProfilePreviewPositionProfileInput {
  /**
   * An array of `JobCategory` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme has a maximum of one element.
   */
  jobCategories?: InputMaybe<Array<Scalars['String']>>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: PostedPositionProfilePreviewRemunerationPackageInput;
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions?: InputMaybe<
    Array<PositionFormattedDescriptionInput>
  >;
  /**
   * An array of `Location` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme has a maximum of one element.
   */
  positionLocation?: InputMaybe<Array<Scalars['String']>>;
  /**
   * An array of identifiers for the `HiringOrganization`s that have the position.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionOrganizations: Array<Scalars['String']>;
  /**
   * A short phrase describing the position as it would be listed on a business card or in a company directory.
   *
   * This field has a maximum length of 80 characters.
   */
  positionTitle: Scalars['String'];
  /**
   * The instructions related to posting the job ad.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  postingInstructions: Array<PostedPositionProfilePreviewPostingInstructionInput>;
  /**
   * The identifier for the `PositionProfile` to be updated.
   *
   * This field should only be provided when updating an existing `PositionProfile`.
   */
  profileId?: InputMaybe<Scalars['String']>;
  /**
   * A SEEK ANZ work type code.
   *
   * For positions in `seekAnz` scheme, this field is used instead of `positionScheduleTypeCodes`.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * Scheme requirements:
   *
   * - This field is required for the `seekAnz` scheme.
   * - Omit this field for other schemes.
   */
  seekAnzWorkTypeCode: Scalars['String'];
  /**
   * The identifier for the `ApplicationQuestionnaire` to present to a candidate during their application.
   *
   * A preview of the question set may be displayed on the job ad.
   *
   * SEEK questionnaires are only supported on our native apply form;
   * omit this field if an `ApplicationMethodInput.applicationUri` is provided.
   */
  seekApplicationQuestionnaireId?: InputMaybe<Scalars['String']>;
  /** The video to render within the job ad. */
  seekVideo?: InputMaybe<SeekVideoInput>;
}

/** Information about how to post a job ad and where to direct its candidate applications. */
export interface PostedPositionProfilePreviewPostingInstructionInput {
  /**
   * An array of methods for applying to the position.
   *
   * If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
   * Native applications will emit a `CandidateApplicationCreated` event that points to a `CandidateProfile` object.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field is limited to a single element.
   *   Requests with more than 1 element will fail.
   */
  applicationMethods?: InputMaybe<Array<ApplicationMethodInput>>;
  /**
   * The identifier for the `AdvertisementBranding` to apply to the posted job ad.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field's behavior is dependent on the `SeekAnzAdProductFeatures` of the product set in the `seekAnzAdvertisementType` field.
   *
   *   When the product's `SeekAnzAdProductFeatures.brandingIndicator` value is false, this field will be silently ignored.
   */
  brandingId?: InputMaybe<Scalars['String']>;
  /** The identifier for the `AdvertisementProduct`. */
  seekAdvertisementProductId?: InputMaybe<Scalars['String']>;
  /**
   * A SEEK ANZ advertisement type code.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic job ad.
   * - `StandOut` indicates a StandOut job ad.
   * - `Premium` indicates a Premium job ad.
   *
   * Scheme requirements:
   *
   * - This field is required for the `seekAnz` scheme.
   * - Omit this field for other schemes.
   */
  seekAnzAdvertisementType?: InputMaybe<Scalars['String']>;
}

/** A monetary amount of remuneration in a specified currency for a position to be previewed prior to posting. */
export interface PostedPositionProfilePreviewRemunerationAmountInput {
  /**
   * The three-letter ISO 4217 currency code, in uppercase.
   *
   * For the `seekAnz` scheme, the following currencies are accepted:
   *
   * - `AUD`
   * - `BDT`
   * - `CNY`
   * - `EUR`
   * - `GBP`
   * - `HKD`
   * - `IDR`
   * - `INR`
   * - `JPY`
   * - `MYR`
   * - `NZD`
   * - `PHP`
   * - `SGD`
   * - `THB`
   * - `USD`
   * - `VND`
   */
  currency: Scalars['String'];
  /**
   * A non-negative float in the major currency unit for the ISO currency code.
   *
   * For example, this is the number of dollars in dollar-denominated currencies.
   */
  value: Scalars['Float'];
}

/** The salary or compensation for a position to be previewed prior to posting. */
export interface PostedPositionProfilePreviewRemunerationPackageInput {
  /**
   * A code classifying the primary method of payment for a position.
   *
   * Currently, three codes are defined:
   *
   * - `Hourly` employment is paid for the number of hours worked.
   *
   * - `Salaried` employment is paid on a monthly or annual basis.
   *
   * - `SalariedPlusCommission` employment is paid on an annual basis plus a results-based commission.
   */
  basisCode?: InputMaybe<Scalars['String']>;
  /**
   * Human readable descriptions of the remuneration package.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme is limited to a single element with a maximum length of 50 characters.
   *
   * An empty array must be provided to signify the absence of salary descriptions.
   */
  descriptions: Array<Scalars['String']>;
  /**
   * An array of offered salary ranges.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme is limited to a single element containing the amount for the `basisCode`.
   *
   * Salary ranges are used to refine candidate job searches.
   * While the monetary values in `minimumAmount` and `maximumAmount` are not visible on job ads,
   * the currency and interval may be displayed alongside the `descriptions` of the remuneration package for clarity.
   */
  ranges?: InputMaybe<
    Array<PostedPositionProfilePreviewRemunerationRangeInput>
  >;
}

/**
 * A salary or compensation range for a position to be previewed prior to posting.
 *
 * Salary ranges are used to refine candidate job searches.
 * While the monetary values in `minimumAmount` and `maximumAmount` are not visible on job ads,
 * the currency and interval may be displayed alongside the `descriptions` of the remuneration package for clarity.
 */
export interface PostedPositionProfilePreviewRemunerationRangeInput {
  /**
   * The interval the remuneration amounts are calculated over.
   *
   * Currently three interval codes are defined:
   *
   * - `Hour` is used to express hourly rates.
   * - `Month` is used to express monthly salaries.
   * - `Year` is used to express annual salaries.
   *
   * The specified value must correspond to `RemunerationPackageInput.basisCode`.
   * When `RemunerationPackageInput.basisCode` equals `Hourly`, the `RemunerationRangeInput.intervalCode` must be `Hour`.
   * When `RemunerationPackageInput.basisCode` equals `Salaried`, the `RemunerationRangeInput.intervalCode` must be `Month` or `Year`.
   * For all other `RemunerationPackageInput.basisCode`s, the `RemunerationRangeInput.intervalCode` must be `Year`.
   */
  intervalCode: Scalars['String'];
  /**
   * The maximum amount an organization is willing to pay for a position.
   *
   * The value must be greater than or equal to the value of `minimumAmount` and the currency must match `minimumAmount`.
   *
   * This should be a mandatory input in your software and will be required in our schema in future.
   * Currently, omitting the field will default it to `minimumAmount` and harm the performance of the job ad.
   */
  maximumAmount?: InputMaybe<RemunerationAmountInput>;
  /**
   * The minimum amount an organization is willing to pay for a position.
   *
   * The value must be greater than 0.
   */
  minimumAmount: RemunerationAmountInput;
}

/** The details of the advertisement product for a job ad. */
export interface PostedPositionProfileAdvertisementProduct {
  __typename?: 'PostedPositionProfile_AdvertisementProduct';
  /**
   * The name of the advertisement product for displaying to the user.
   *
   * This field is for display purposes only and should not be used to determine any features of an ad.
   */
  label: Scalars['String'];
}

/** Information about how to post a job ad and where to direct its candidate applications. */
export interface PostingInstruction {
  __typename?: 'PostingInstruction';
  /**
   * An array of methods for applying to the position.
   *
   * If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
   * Native applications will emit a `CandidateApplicationCreated` event that points to a `CandidateProfile` object.
   */
  applicationMethods: Array<ApplicationMethod>;
  /** The branding applied to the posted job ad. */
  branding?: Maybe<AdvertisementBranding>;
  /**
   * The identifier for the `AdvertisementBranding` applied to the posted job ad.
   *
   * This is included for HR-JSON compatibility;
   * GraphQL users should use the `branding` nested object instead.
   */
  brandingId?: Maybe<Scalars['String']>;
  /** The end date of the posting. */
  end: Scalars['DateTime'];
  /**
   * A SEEK advertisement product label.
   *
   * This field is for display purposes only and should not be used to determine any features of an ad.
   */
  seekAdvertisementProduct?: Maybe<PostedPositionProfileAdvertisementProduct>;
  /**
   * A SEEK ANZ advertisement type code.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic job ad.
   * - `StandOut` indicates a StandOut job ad.
   * - `Premium` indicates a Premium job ad.
   *
   * For positions in other schemes this will be `null`.
   */
  seekAnzAdvertisementType?: Maybe<Scalars['String']>;
  /** The start date of the posting. */
  start: Scalars['DateTime'];
}

/** The party that owns the position opening. */
export interface PostingRequester {
  __typename?: 'PostingRequester';
  /**
   * The identifier for the `HiringOrganization` that owns the position opening.
   *
   * This is typically a hirer,
   * but may be a recruitment agency for position openings created outside of the SEEK API.
   */
  id: ObjectIdentifier;
  /** The name of the party that owns the position opening. */
  name: Scalars['String'];
  /** Specific contact people for the position opening at the party. */
  personContacts: Array<SpecifiedPerson>;
  /**
   * The role of the owner of the position opening.
   *
   * Currently, two codes are defined:
   *
   * - `Agency` indicates a recruitment agency hiring on behalf of another company.
   *
   *   This only applies to position openings created outside of the SEEK API.
   *
   * - `Company` indicates a company hiring on behalf of themselves.
   *
   *   This applies to all position openings created through the SEEK API.
   */
  roleCode: Scalars['String'];
  /**
   * The legacy SEEK ANZ advertiser ID.
   *
   * This is a numeric identifier used by legacy Job Posting & Application Export APIs in the `seekAnz` scheme.
   * For hirers or agencies in other schemes this will be `null`.
   */
  seekAnzAdvertiserId?: Maybe<Scalars['Int']>;
}

/** The party that owns the position opening. */
export interface PostingRequesterInput {
  /** The identifier for the `HiringOrganization` that owns the position opening. */
  id: Scalars['String'];
  /**
   * Specific contact people for the position opening at the party.
   *
   * The name, email address & role of at least one contact person must be provided.
   * A maximum of 10 contact people may be provided.
   */
  personContacts: Array<SpecifiedPersonInput>;
  /**
   * The role of the owner of the position opening.
   *
   * Currently, one code is defined:
   *
   * - `Company` indicates a company hiring on behalf of themselves.
   */
  roleCode: Scalars['String'];
}

/** A candidate's preferences in the location of a position. */
export interface PreferredLocation {
  __typename?: 'PreferredLocation';
  /** The address that represents the preferred location. */
  referenceLocation: Address;
}

/** A candidate's preferences in the location of a position. */
export interface PreferredLocationInput {
  /** The address that represents the preferred location. */
  referenceLocation: AddressInput;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface Query {
  __typename?: 'Query';
  /**
   * The advertisement branding for the given `id`.
   *
   * This query accepts browser tokens that include the `query:advertisement-brandings` scope.
   */
  advertisementBranding?: Maybe<AdvertisementBranding>;
  /**
   * A page of advertisement brandings associated with the specified `hirerId`.
   *
   * A maximum of 100 advertisement brandings can be returned in a single page.
   * Additional advertisement brandings can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known advertisement branding if no pagination arguments are provided.
   *
   * This query accepts browser tokens that include the `query:advertisement-brandings` scope.
   */
  advertisementBrandings: AdvertisementBrandingsConnection;
  /**
   * The list of advertisement products available to the hirer when posting or updating a job.
   *
   * This query accepts browser tokens that include the `query:ad-products` scope.
   */
  advertisementProducts: AdvertisementProducts;
  /**
   * An array of suggested application questions for the provided partial `PositionProfile` in decreasing order of relevance.
   *
   * A maximum of 10 application questions can be recommended.
   *
   * This query accepts browser tokens that include the `query:application-library-question-suggestions` scope.
   */
  applicationLibraryQuestionSuggestions: Array<ApplicationLibraryQuestionSuggestion>;
  /**
   * An application questionnaire with the given `id`.
   *
   * Questionnaires can be associated with a `PositionProfile`.
   *
   * This query accepts browser tokens that include the `query:application-questionnaires` scope.
   */
  applicationQuestionnaire?: Maybe<ApplicationQuestionnaire>;
  /**
   * The candidate for the given `id`.
   *
   * This will include the candidate's personal details along with all application profiles for a single hirer.
   */
  candidate?: Maybe<Candidate>;
  /** The `CandidateProcessHistoryItem` for the given `id`. */
  candidateProcessHistoryItem?: Maybe<CandidateProcessHistoryItem>;
  /** The `CandidateProfile` for the given `id`. */
  candidateProfile?: Maybe<CandidateProfile>;
  /**
   * A list of currencies.
   *
   * These may be presented to a hirer for selection in a job posting flow.
   * A dropdown is recommended.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  currencies: Array<Currency>;
  /** The event for the given `id`. */
  event?: Maybe<Event>;
  /**
   * A page of events matching the specified criteria.
   *
   * A maximum of 100 events can be returned in a single page.
   * Additional events can be queried using a pagination cursor.
   *
   * The result list is returned in ascending stream date & time order.
   * It starts from the earliest known event if no pagination arguments are provided.
   */
  events: EventsConnection;
  /**
   * The hiring organization for the given `id`.
   *
   * This query accepts browser tokens that include the `query:organizations` scope.
   */
  hiringOrganization?: Maybe<HiringOrganization>;
  /**
   * A page of hirers that have an active relationship with the requesting partner.
   *
   * This will not return agencies; it's not possible to have a relationship with an agency.
   *
   * A maximum of 100 hirers can be returned in a single page.
   * Additional hirers can be queried using a pagination cursor.
   *
   * The result list is ordered alphabetically by the hirer's name.
   *
   * This query accepts browser tokens that include the `query:organizations` scope.
   * It will only return the single hirer that the browser token is scoped to.
   */
  hiringOrganizations: HiringOrganizationsConnection;
  /**
   * A location inferred from the provided address details.
   *
   * SEEK will attempt to match the address details to a location in our hierarchy on a best-effort basis.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  inferLocation?: Maybe<Location>;
  /**
   * A list of top-level job categories for the provided scheme.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  jobCategories: Array<JobCategory>;
  /**
   * The job category for the given `id`.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  jobCategory?: Maybe<JobCategory>;
  /**
   * An array of suggested job categories for the provided partial `PositionProfile` in decreasing order of relevance.
   *
   * A maximum of 10 job categories can be recommended.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  jobCategorySuggestions: Array<JobCategorySuggestionChoice>;
  /**
   * A location node with the given location `id`.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  location?: Maybe<Location>;
  /**
   * An array of suggested locations for the text provided in decreasing order of relevance.
   *
   * While a maximum of 20 locations can be requested, the current implementation does not return more than 10 recommendations.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  locationSuggestions?: Maybe<Array<LocationSuggestion>>;
  /**
   * An array of locations relevant to the provided geolocation ordered by distance.
   *
   * A maximum of 10 locations can be recommended.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  nearestLocations?: Maybe<Array<Location>>;
  /**
   * A list of pay types that specify the method and interval of a payment.
   *
   * These may be presented to a hirer for selection in a job posting flow.
   * A dropdown or radio group is recommended.
   *
   * This query accepts browser tokens that include the `query:ontologies` scope.
   */
  payTypes: Array<PayType>;
  /** A position opening with the given `id`. */
  positionOpening?: Maybe<PositionOpening>;
  /**
   * A page of position openings for the given `hirerId`.
   *
   * Currently, only position openings in the `global` and `globalPublicTest` schemes are returned.
   *
   * A maximum of 20 position openings can be returned in a single page.
   * Additional position openings can be queried using a pagination cursor.
   */
  positionOpenings: PositionOpeningConnection;
  /**
   * A position profile with the given `id`.
   *
   * This query accepts browser tokens that include the `query:position-profiles` scope for posted position profiles.
   * Note that this scope does not grant access to the containing `PositionProfile.positionOpening`.
   */
  positionProfile?: Maybe<PositionProfile>;
  /**
   * A preview of a prospective job ad as it would appear on a SEEK job board.
   *
   * This query accepts browser tokens that include the `query:posted-position-profile-previews` scope.
   */
  postedPositionProfilePreview: PostedPositionProfilePreview;
  /**
   * A hiring organization corresponding to the given SEEK ANZ advertiser ID.
   *
   * This query accepts browser tokens that include the `query:organizations` scope.
   */
  seekAnzAdvertiser?: Maybe<HiringOrganization>;
  /**
   * Ad products available when initially posting a job ad.
   *
   * This query accepts browser tokens that include the `query:ad-products` scope.
   */
  seekAnzHirerAdvertisementCreationProducts?: Maybe<Array<SeekAnzAdProduct>>;
  /**
   * Ad products available when updating a live job ad.
   *
   * Use this query when you have the `PositionProfile.profileId` for the live job ad.
   *
   * This query accepts browser tokens that include the `query:ad-products` scope.
   */
  seekAnzHirerAdvertisementModificationProducts?: Maybe<
    Array<SeekAnzAdProduct>
  >;
  /**
   * Ad products available when updating a job ad.
   *
   * Use this query when you don't have the `PositionProfile.profileId` for the live job ad.
   *
   * This query accepts browser tokens that include the `query:ad-products` scope.
   */
  seekAnzHirerAdvertisementModificationProductsAlt?: Maybe<
    Array<SeekAnzAdProduct>
  >;
  /**
   * The organizations the query's access token can act on behalf of.
   *
   * For all token types this returns the name of the integration partner.
   *
   * This query accepts browser tokens that include the `query:organizations` scope.
   * When provided with a browser token this will additionally return the scoped SEEK hirer.
   */
  self: SelfOrganizations;
  /** The API version. */
  version: Scalars['String'];
  /**
   * A page of webhook attempts matching the specified criteria generated by a selected event.
   *
   * A maximum of 100 webhook attempts can be returned in a single page.
   * Additional webhook attempts can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known attempt if no pagination arguments are provided.
   */
  webhookAttemptsForEvent: WebhookAttemptsConnection;
  /** The webhook request for the given `requestId`. */
  webhookRequest?: Maybe<WebhookRequest>;
  /**
   * A page of webhook requests matching the specified criteria generated by a selected subscription.
   *
   * A maximum of 100 webhook requests can be returned in a single page.
   * Additional webhook requests can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known request if no pagination arguments are provided.
   */
  webhookRequestsForSubscription: WebhookRequestsConnection;
  /** The webhook subscription for the given `id`. */
  webhookSubscription?: Maybe<WebhookSubscription>;
  /** The webhook subscription replay for the given `id`. */
  webhookSubscriptionReplay?: Maybe<WebhookSubscriptionReplay>;
  /**
   * A page of webhook subscriptions matching the specified criteria.
   *
   * A maximum of 100 webhook subscriptions can be returned in a single page.
   * Additional webhook subscriptions can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known subscription if no pagination arguments are provided.
   */
  webhookSubscriptions: WebhookSubscriptionsConnection;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryAdvertisementBrandingArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryAdvertisementBrandingsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hirerId: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryAdvertisementProductsArgs {
  limit?: InputMaybe<Scalars['Int']>;
  positionProfile: AdvertisementProductsPositionProfileInput;
  selectedAdvertisementProductId?: InputMaybe<Scalars['String']>;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryApplicationLibraryQuestionSuggestionsArgs {
  first?: InputMaybe<Scalars['Int']>;
  positionProfile: ApplicationLibraryQuestionSuggestionsPositionProfileInput;
  schemeId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryApplicationQuestionnaireArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryCandidateArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryCandidateProcessHistoryItemArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryCandidateProfileArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryCurrenciesArgs {
  usageTypeCode: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryEventArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryEventsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<EventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  schemeId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryHiringOrganizationArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryHiringOrganizationsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<HiringOrganizationsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  schemeId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryInferLocationArgs {
  address: SeekPositionAddressInput;
  hirerId?: InputMaybe<Scalars['String']>;
  schemeId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryJobCategoriesArgs {
  positionProfile?: InputMaybe<JobCategoriesPositionProfileInput>;
  schemeId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryJobCategoryArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryJobCategorySuggestionsArgs {
  first?: InputMaybe<Scalars['Int']>;
  positionProfile: JobCategorySuggestionPositionProfileInput;
  schemeId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryLocationArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryLocationSuggestionsArgs {
  first?: InputMaybe<Scalars['Int']>;
  hirerId?: InputMaybe<Scalars['String']>;
  schemeId: Scalars['String'];
  text: Scalars['String'];
  usageTypeCode: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryNearestLocationsArgs {
  first?: InputMaybe<Scalars['Int']>;
  geoLocation: GeoLocationInput;
  schemeId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryPayTypesArgs {
  schemeId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryPositionOpeningArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryPositionOpeningsArgs {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PositionOpeningsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  hirerId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryPositionProfileArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryPostedPositionProfilePreviewArgs {
  positionProfile: PostedPositionProfilePreviewPositionProfileInput;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QuerySeekAnzAdvertiserArgs {
  id: Scalars['Int'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QuerySeekAnzHirerAdvertisementCreationProductsArgs {
  draftAdvertisement: SeekAnzAdProductAdvertisementDraftInput;
  hirerId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QuerySeekAnzHirerAdvertisementModificationProductsArgs {
  advertisementId: Scalars['String'];
  draftAdvertisement: SeekAnzAdProductAdvertisementDraftInput;
  hirerId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QuerySeekAnzHirerAdvertisementModificationProductsAltArgs {
  advertisement: SeekAnzAdProductAdvertisementInput;
  draftAdvertisement: SeekAnzAdProductAdvertisementDraftInput;
  hirerId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryWebhookAttemptsForEventArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  eventId: Scalars['String'];
  filter?: InputMaybe<WebhookAttemptsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryWebhookRequestArgs {
  requestId: Scalars['String'];
  schemeId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryWebhookRequestsForSubscriptionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WebhookRequestFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  subscriptionId: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryWebhookSubscriptionArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryWebhookSubscriptionReplayArgs {
  id: Scalars['String'];
}

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryWebhookSubscriptionsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WebhookSubscriptionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  schemeId: Scalars['String'];
}

/** A monetary amount of remuneration in a specified currency. */
export interface RemunerationAmount {
  __typename?: 'RemunerationAmount';
  /** The three-letter ISO 4217 currency code, in uppercase. */
  currency: Scalars['String'];
  /**
   * A non-negative float in the major currency unit for the ISO currency code.
   *
   * For example, this is the number of dollars in dollar-denominated currencies.
   */
  value: Scalars['Float'];
}

/** A monetary amount of remuneration in a specified currency. */
export interface RemunerationAmountInput {
  /**
   * The three-letter ISO 4217 currency code, in uppercase.
   *
   * For the `seekAnz` scheme, the following currencies are accepted:
   *
   * - `AUD`
   * - `BDT`
   * - `CNY`
   * - `EUR`
   * - `GBP`
   * - `HKD`
   * - `IDR`
   * - `INR`
   * - `JPY`
   * - `MYR`
   * - `NZD`
   * - `PHP`
   * - `SGD`
   * - `THB`
   * - `USD`
   * - `VND`
   */
  currency: Scalars['String'];
  /**
   * A non-negative float in the major currency unit for the ISO currency code.
   *
   * For example, this is the number of dollars in dollar-denominated currencies.
   */
  value: Scalars['Float'];
}

/** The salary or compensation for a position. */
export interface RemunerationPackage {
  __typename?: 'RemunerationPackage';
  /**
   * A code classifying the primary method of payment for a position.
   *
   * Currently, four codes are defined:
   *
   * - `CommissionOnly` employment is paid exclusively a results-based commission.
   *   This payment basis is deprecated and should be removed from your software.
   *
   * - `Hourly` employment is paid for the number of hours worked.
   *
   * - `Salaried` employment is paid on a monthly or annual basis.
   *
   * - `SalariedPlusCommission` employment is paid on an annual basis plus a results-based commission.
   */
  basisCode: Scalars['String'];
  /**
   * Human readable descriptions of the remuneration package.
   *
   * The `seekAnz` scheme will be limited to a single element.
   *
   * An empty array signifies that no salary descriptions exist for the remuneration package.
   */
  descriptions: Array<Scalars['String']>;
  /**
   * An array of offered salary ranges.
   *
   * The `seekAnz` scheme will always have a single element containing the amount for the `basisCode`.
   */
  ranges: Array<RemunerationRange>;
}

/** The salary or compensation for a position. */
export interface RemunerationPackageInput {
  /**
   * A code classifying the primary method of payment for a position.
   *
   * Currently, four codes are defined:
   *
   * - `CommissionOnly` employment is paid exclusively a results-based commission.
   *   This payment basis is deprecated and should be removed from your software.
   *
   * - `Hourly` employment is paid for the number of hours worked.
   *
   * - `Salaried` employment is paid on a monthly or annual basis.
   *
   * - `SalariedPlusCommission` employment is paid on an annual basis plus a results-based commission.
   */
  basisCode: Scalars['String'];
  /**
   * Human readable descriptions of the remuneration package.
   *
   * Scheme requirements:
   *
   * - The `global` scheme has a maximum of 10 elements for `UnpostedPositionProfile`s.
   * - The `seekAnz` scheme is limited to a single element with a maximum length of 50 characters.
   *
   * An empty array must be provided to signify the absence of salary descriptions.
   */
  descriptions: Array<Scalars['String']>;
  /**
   * An array of offered salary ranges.
   *
   * Scheme requirements:
   *
   * - The `global` scheme has a maximum of 10 elements for `UnpostedPositionProfile`s.
   * - The `seekAnz` scheme is limited to a single element containing the amount for the `basisCode`.
   *
   * Salary ranges are used to refine candidate job searches.
   * While the monetary values in `minimumAmount` and `maximumAmount` are not visible on job ads,
   * the currency and interval may be displayed alongside the `descriptions` of the remuneration package for clarity.
   */
  ranges: Array<RemunerationRangeInput>;
}

/** A salary or compensation range for a position. */
export interface RemunerationRange {
  __typename?: 'RemunerationRange';
  /**
   * The interval the remuneration amounts are calculated over.
   *
   * Currently three interval codes are defined:
   *
   * - `Hour` is used to express hourly rates.
   * - `Month` is used to express monthly salaries.
   * - `Year` is used to express annual salaries or commissions.
   */
  intervalCode: Scalars['String'];
  /**
   * The maximum amount an organization is willing to pay for a position.
   *
   * The value must be greater than or equal to the value of `minimumAmount` and the currency must match `minimumAmount`.
   *
   * The associated `RemunerationRangeInput.maximumAmount` field will be required in our schema in future.
   * Currently, omitting the field will default it to `minimumAmount` and harm the performance of the job ad.
   */
  maximumAmount?: Maybe<RemunerationAmount>;
  /**
   * The minimum amount an organization is willing to pay for a position.
   *
   * The value must be greater than 0.
   */
  minimumAmount: RemunerationAmount;
}

/**
 * A salary or compensation range for a position.
 *
 * Salary ranges are used to refine candidate job searches.
 * While the monetary values in `minimumAmount` and `maximumAmount` are not visible on job ads,
 * the currency and interval may be displayed alongside the `descriptions` of the remuneration package for clarity.
 */
export interface RemunerationRangeInput {
  /**
   * The interval the remuneration amounts are calculated over.
   *
   * Currently three interval codes are defined:
   *
   * - `Hour` is used to express hourly rates.
   * - `Month` is used to express monthly salaries.
   * - `Year` is used to express annual salaries.
   *
   * The specified value must correspond to `RemunerationPackageInput.basisCode`.
   * When `RemunerationPackageInput.basisCode` equals `Hourly`, the `RemunerationRangeInput.intervalCode` must be `Hour`.
   * When `RemunerationPackageInput.basisCode` equals `Salaried`, the `RemunerationRangeInput.intervalCode` must be `Month` or `Year`.
   * For all other `RemunerationPackageInput.basisCode`s, the `RemunerationRangeInput.intervalCode` must be `Year`.
   */
  intervalCode: Scalars['String'];
  /**
   * The maximum amount an organization is willing to pay for a position.
   *
   * The value must be greater than or equal to the value of `minimumAmount` and the currency must match `minimumAmount`.
   *
   * This should be a mandatory input in your software and will be required in our schema in future.
   * Currently, omitting the field will default it to `minimumAmount` and harm the performance of the job ad.
   */
  maximumAmount?: InputMaybe<RemunerationAmountInput>;
  /**
   * The minimum amount an organization is willing to pay for a position.
   *
   * The value must be greater than 0.
   */
  minimumAmount: RemunerationAmountInput;
}

/** The input parameter for the `replayWebhookSubscription` mutation. */
export interface ReplayWebhookSubscriptionInput {
  /**
   * List of event IDs to filter which events are to be replayed.
   *
   * This is an alternative to the `filter` argument, providing the ability to replay a list of specific events by their IDs.
   * `eventIds` and `filter` cannot be specified in the same mutation.
   *
   * A maximum of 100 event IDs may be provided.
   */
  eventIds?: InputMaybe<Array<Scalars['String']>>;
  /**
   * Additional fields to filter which events are to be replayed.
   *
   * This is an alternative to the `eventIds` argument, and allows replaying events within a designated time range.
   * `eventIds` and `filter` cannot be specified in the same mutation.
   */
  filter?: InputMaybe<ReplayWebhookSubscriptionFilterInput>;
  /** The details of the webhook subscription to be replayed. */
  webhookSubscription: ReplayWebhookSubscriptionSubscriptionInput;
}

/** The response from the `replayWebhookSubscription` mutation. */
export interface ReplayWebhookSubscriptionPayload {
  __typename?: 'ReplayWebhookSubscriptionPayload';
  /** The details of the webhook subscription to have its messages redelivered. */
  webhookSubscription: WebhookSubscription;
}

/** Criteria used to decide which events will be replayed. */
export interface ReplayWebhookSubscriptionFilterInput {
  /** The earliest event to replay. */
  createdAfterDateTime: Scalars['DateTime'];
  /** The latest event to replay. */
  createdBeforeDateTime: Scalars['DateTime'];
  /**
   * The hirer ID to replay events for.
   *
   * This must be specified for partner-scoped subscriptions if  `replayDeliveredEventsIndicator` is true.
   * This defaults to the corresponding `WebhookSubscription.hirerId` for a hirer-scoped subscription.
   */
  hirerId?: InputMaybe<Scalars['String']>;
  /** Whether to include all events, or only events that have failed to be delivered. */
  replayDeliveredEventsIndicator: Scalars['Boolean'];
}

/** The details of the webhook subscription to be replayed. */
export interface ReplayWebhookSubscriptionSubscriptionInput {
  /** The identifier for the `WebhookSubscription`. */
  id: Scalars['String'];
}

/** The details of an available ad product. */
export interface SeekAnzAdProduct {
  __typename?: 'SeekAnzAdProduct';
  /**
   * The type of the ad product.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic ad.
   * - `StandOut` indicates a StandOut ad.
   * - `Premium` indicates a Premium ad.
   *
   * This value should be provided as `PostingInstruction.seekAnzAdvertisementType` when posting or updating the job ad.
   */
  advertisementTypeCode: Scalars['String'];
  /** How the ad product would be paid. */
  checkoutEstimate: SeekAnzAdProductCheckoutEstimate;
  /** The human-readable description of the ad product. */
  description: Scalars['String'];
  /** Whether the ad product should be selectable by the hirer. */
  enabledIndicator: Scalars['Boolean'];
  /** The features this product supports. */
  features: SeekAnzAdProductFeatures;
  /** The messages that may be shown to hirer. */
  messages: Array<SeekAnzAdProductMessage>;
  /** The human-readable ad product name. */
  name: Scalars['String'];
  /** The price component of the ad product. */
  price: SeekAnzAdProductPrice;
}

/**
 * The proposed state of a job ad.
 *
 * This contains the `PositionProfile` fields relevant to querying ad products.
 */
export interface SeekAnzAdProductAdvertisementDraftInput {
  /**
   * The hirer's job reference.
   *
   * This field is used for tracing & debugging.
   * It does not impact the available ad products or their pricing.
   */
  hirerJobReference?: InputMaybe<Scalars['String']>;
  /** The identifier for the `JobCategory`. */
  jobCategoryId?: InputMaybe<Scalars['String']>;
  /** The identifier for the position's `Location`. */
  positionLocationId?: InputMaybe<Scalars['String']>;
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle?: InputMaybe<Scalars['String']>;
  /**
   * The type of the ad product.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic ad.
   * - `StandOut` indicates a StandOut ad.
   * - `Premium` indicates a Premium ad.
   *
   * This field is unused and may be omitted from the input.
   */
  typeCode?: InputMaybe<Scalars['String']>;
}

/**
 * The state of a live job ad as persisted by an integration partner.
 *
 * This contains the `PositionProfile` fields relevant to querying ad products.
 */
export interface SeekAnzAdProductAdvertisementInput {
  /**
   * The hirer's job reference.
   *
   * This field is used for tracing & debugging.
   * It does not impact the available ad product or their pricing.
   */
  hirerJobReference?: InputMaybe<Scalars['String']>;
  /** The identifier for the `PositionProfile`. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifier for the `JobCategory`. */
  jobCategoryId: Scalars['String'];
  /** The identifier for the position's `Location`. */
  positionLocationId: Scalars['String'];
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /**
   * The type of the ad product.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic ad.
   * - `StandOut` indicates a StandOut ad.
   * - `Premium` indicates a Premium ad.
   */
  typeCode: Scalars['String'];
}

/** The details of the outstanding payment. */
export interface SeekAnzAdProductCheckoutEstimate {
  __typename?: 'SeekAnzAdProductCheckoutEstimate';
  /** The contract component of the checkout estimate. */
  contractConsumption?: Maybe<SeekAnzAdProductContractConsumption>;
  /** The amount left to be paid. */
  paymentDueExcludingTax?: Maybe<CurrencyMinorUnit>;
  /** The human-readable checkout estimate summary. */
  summary: Scalars['String'];
}

/** The details of changes to the hirer's contract consumption. */
export interface SeekAnzAdProductContractConsumption {
  __typename?: 'SeekAnzAdProductContractConsumption';
  /** The human-readable summary of contract consumption. */
  summary: Scalars['String'];
  /**
   * The type of contract consumption.
   *
   * Currently, three codes are defined:
   *
   * - `SameAdType` indicates payment due will be consumed from a contract of the same ad type as this product.
   * - `OtherAdType` indicates payment due will be consumed from a contract of a different ad type to this product.
   * - `SameAdTypePlusInvoice` indicates payment due will be consumed from a contract of the same ad type as this product and an invoice will be generated.
   */
  typeCode: Scalars['String'];
}

/**
 * The features supported by an ad product.
 *
 * These are features that have a dynamic impact on an integration partner's job posting flow.
 * Ad products may have additional features that are implemented entirely within SEEK's systems.
 */
export interface SeekAnzAdProductFeatures {
  __typename?: 'SeekAnzAdProductFeatures';
  /**
   * Whether the product supports advertisement branding.
   *
   * When false, the `PostingInstruction.brandingId` field will be ignored.
   */
  brandingIndicator: Scalars['Boolean'];
  /**
   * Whether the product supports bullet points in the search results.
   *
   * When false, `SearchBulletPoint` `PositionFormattedDescription`s will be silently discarded.
   */
  searchBulletPointsIndicator: Scalars['Boolean'];
}

/** A message shown to the hirer for the current ad product. */
export interface SeekAnzAdProductMessage {
  __typename?: 'SeekAnzAdProductMessage';
  /** The human-readable content of the message. */
  content: Scalars['String'];
  /**
   * The severity of the message.
   *
   * Currently, two codes are defined:
   *
   * - `Informational` indicates a message with helpful information for a hirer.
   * - `Critical` indicates a message with critical information for a hirer.
   */
  severityCode: Scalars['String'];
  /**
   * The type of message.
   *
   * Currently, four codes are defined:
   * - `PricingError` indicates a message relating to a pricing error.
   * - `PremiumPerformanceChange` indicates a message relating to an impact on premium ad performance.
   * - `UpdatePricingIncrease` indicates a message relating to a price increase in update mode for SEEK contracts.
   * - `ProductUnavailable` indicates a message relating to an unavailable product.
   */
  typeCode: Scalars['String'];
  /**
   * The visibility of the message.
   *
   * Currently, two codes are defined:
   * - `ProductSelected` indicates the message should be visible when the product is selected.
   * - `Always` indicates the message should be always visible.
   */
  visibilityCode: Scalars['String'];
}

/** The price for an ad product. */
export interface SeekAnzAdProductPrice {
  __typename?: 'SeekAnzAdProductPrice';
  /** The product price without tax. */
  amountExcludingTax?: Maybe<CurrencyMinorUnit>;
  /** The human-readable summary of the product price. */
  summary: Scalars['String'];
  /** Whether taxes will be added when purchased. */
  taxedIndicator: Scalars['Boolean'];
  /** Whether the price can be shown to the hirer. */
  visibleForHirerIndicator: Scalars['Boolean'];
}

/** The role of an attachment within a profile. */
export const SeekAttachmentRole = {
  /** A cover letter specific to a position opening. */
  CoverLetter: 'COVER_LETTER',
  /** A resume or CV. */
  Resume: 'RESUME',
  /** A document supporting a position-specific selection criteria. */
  SelectionCriteria: 'SELECTION_CRITERIA',
} as const;

export type SeekAttachmentRole =
  (typeof SeekAttachmentRole)[keyof typeof SeekAttachmentRole];
/** The information required for inferring a SEEK-specific location. */
export interface SeekPositionAddressInput {
  /**
   * The two-letter ISO 3166-1:2013 country code of the address, in uppercase.
   * Include this field to improve inference if you have access to a reliable country code.
   * If you only have access to the country name, please provide this within the `formattedAddress` field.
   */
  countryCode?: InputMaybe<Scalars['String']>;
  /** The address of the location as text. For example `60-88 Cremorne St, Cremorne VIC 3121, Australia`. */
  formattedAddress: Scalars['String'];
  /**
   * The postal code of the location.
   * Include this field to improve inference if you have access to a reliable postal code.
   */
  postalCode?: InputMaybe<Scalars['String']>;
}

/** The source system for the process history item. */
export interface SeekProcessHistoryItemSource {
  __typename?: 'SeekProcessHistoryItemSource';
  /** Free text description of the source. */
  name: Scalars['String'];
}

/** The source system for the process history item. */
export interface SeekProcessHistoryItemSourceInput {
  /** Free text description of the source. */
  name: Scalars['String'];
}

/** An externally hosted video to display alongside advertisement details. */
export interface SeekVideo {
  __typename?: 'SeekVideo';
  /**
   * The position relative to the advertisement details where the video is rendered.
   *
   * Currently, two codes are defined:
   *
   * - `Above` indicates the video will render above the advertisement details.
   * - `Below` indicates the video will render below the advertisement details.
   */
  seekAnzPositionCode: Scalars['String'];
  /** The URL of the video. */
  url: Scalars['String'];
}

/** An externally hosted video to display alongside advertisement details. */
export interface SeekVideoInput {
  /**
   * The position relative to the advertisement details where the video should be rendered.
   *
   * Currently, two codes are defined:
   *
   * - `Above` indicates the video will render above the advertisement details.
   * - `Below` indicates the video will render below the advertisement details.
   */
  seekAnzPositionCode: Scalars['String'];
  /**
   * The URL of the video to display.
   *
   * Scheme requirements:
   *
   *  - The `seekAnz` scheme requires a YouTube link in one of the following formats:
   *
   *     - `https://www.youtube.com/embed/aAgePQvHBQM`
   *     - `https://www.youtube.com/watch?v=aAgePQvHBQM`
   *     - `https://youtu.be/aAgePQvHBQM`
   *
   *    If the URL provided does not match the above criteria it will be ignored.
   *    Examples of unsupported formats include:
   *
   *    - Links with additional query parameters: `https://www.youtube.com/watch?ab_channel=SEEKJobs&v=aAgePQvHBQM`
   *    - Mobile links: `https://m.youtube.com/watch?v=aAgePQvHBQM`
   */
  url: Scalars['String'];
}

/** The organizations the query's access token can act on behalf of. */
export interface SelfOrganizations {
  __typename?: 'SelfOrganizations';
  /**
   * The hirer the browser token is scoped to.
   *
   * This will be `null` when queried with a partner token.
   */
  hirer?: Maybe<HiringOrganization>;
  /** The partner organization making the request. */
  partner: PartnerOrganization;
}

/** A reference to a person associated with an object. */
export interface SpecifiedPerson {
  __typename?: 'SpecifiedPerson';
  /** Methods of communication with the person. */
  communication: Communication;
  /** The person's name. */
  name: PersonName;
  /**
   * The role of the person.
   *
   * Currently, two codes are defined:
   *
   * - `Recruiter` indicates a person recruiting for the position.
   * - `HiringManager` indicates an employee that requested the position to be filled.
   */
  roleCode?: Maybe<Scalars['String']>;
}

/** A reference to a person associated with an object. */
export interface SpecifiedPersonInput {
  /** Methods of communication with the person. */
  communication: CommunicationInput;
  /** The person's name. */
  name: PersonNameInput;
  /**
   * The role of the person.
   *
   * Currently, two codes are defined:
   *
   * - `Recruiter` indicates a person recruiting for the position.
   * - `HiringManager` indicates an employee that requested the position to be filled.
   *
   * This field is required when providing a position opening's `personContacts`.
   */
  roleCode?: InputMaybe<Scalars['String']>;
}

/**
 * A profile of a position opening.
 *
 * This contains information of how a position opening is presented as an internal requisition.
 */
export interface UnpostedPositionProfile extends PositionProfile {
  __typename?: 'UnpostedPositionProfile';
  /** The occupational categories of the job. */
  jobCategories: Array<JobCategory>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackage;
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescription>;
  /** The locations of the position. */
  positionLocation: Array<Location>;
  /** The `PositionOpening` that this profile was created under. */
  positionOpening: PositionOpening;
  /** An array of identifiers for the `HiringOrganization`s that have the position. */
  positionOrganizations: Array<HiringOrganization>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * If the offered schedule isn't known this will be `null`.
   */
  positionScheduleTypeCodes?: Maybe<Array<Scalars['String']>>;
  /** A short phrase describing the position as it would be listed on a business card or in a company directory. */
  positionTitle: Scalars['String'];
  /**
   * The object identifier for the `PositionProfile`.
   *
   * This is duplicated from the `profileId` field to satisfy the `PositionProfile` interface.
   */
  positionUri: Scalars['String'];
  /** The instructions related to posting the job ad. */
  postingInstructions: Array<PostingInstruction>;
  /** The identifier for the `PositionProfile`. */
  profileId: ObjectIdentifier;
  /**
   * A human-readable name given to the profile.
   *
   * This in addition to the `positionTitle` can help identify the profile to an end user.
   */
  profileName?: Maybe<Scalars['String']>;
  /**
   * A work type code for the `seekAnz` scheme.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * For positions in other schemes this will be `null`.
   */
  seekAnzWorkTypeCode?: Maybe<Scalars['String']>;
  /**
   * The set of questions presented to candidates during an application.
   *
   * The questionnaire responses will be available as `CandidateProfile.seekQuestionnaireSubmission` on the candidate's application profile.
   */
  seekApplicationQuestionnaire?: Maybe<ApplicationQuestionnaire>;
  /**
   * An optional opaque billing reference.
   *
   * SEEK does not use this field on unposted position profiles.
   */
  seekBillingReference?: Maybe<Scalars['String']>;
  /**
   * Whether the position profile was created by the requesting partner.
   *
   * If your software cannot ingest objects that are created by another source,
   * this can be used to filter out such position profiles.
   *
   * This indicator is never `null` for unposted position profiles.
   */
  seekCreatedBySelfIndicator?: Maybe<Scalars['Boolean']>;
  /** An optional hirer-provided opaque job reference. */
  seekHirerJobReference?: Maybe<Scalars['String']>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 characters.
   */
  seekPartnerMetadata?: Maybe<Scalars['String']>;
  /** The type of position profile, i.e. `UnpostedPositionProfile`. */
  seekTypeCode: Scalars['String'];
  /** The video to render within the job ad. */
  seekVideo?: Maybe<SeekVideo>;
}

/** The input parameter for the `updateCandidateProcessHistoryItem` mutation. */
export interface UpdateCandidateProcessHistoryItemInput {
  /** The details of the  `CandidateProcessHistoryItem` to be updated. */
  candidateProcessHistoryItem: UpdateCandidateProcessHistoryItemCandidateProcessHistoryItemInput;
}

/** The response from the `updateCandidateProcessHistoryItem` mutation. */
export interface UpdateCandidateProcessHistoryItemPayload {
  __typename?: 'UpdateCandidateProcessHistoryItemPayload';
  /** The details of the `CandidateProcessHistoryItem` that was updated. */
  candidateProcessHistoryItem: CandidateProcessHistoryItem;
}

/** The details of the `CandidateProcessHistoryItem` to be updated. */
export interface UpdateCandidateProcessHistoryItemCandidateProcessHistoryItemInput {
  /**
   * The executed action that constitutes this history item.
   *
   * This action may or may not trigger a change in the status of the underlying process.
   * For example, an action may be to add a note against a candidate's profile,
   * which has no material effect on the stage through the application process.
   */
  action: CandidateProcessActionInput;
  /** The date & time the action was executed. */
  actionDate: Scalars['DateTime'];
  /** The identifier for the `CandidateProcessHistoryItem` to be updated. */
  id: Scalars['String'];
  /**
   * The position profile that the history item relates to.
   *
   * This is null for interactions that are not specific to an individual position,
   * such as a general interview with a recruiter.
   */
  positionProfile?: InputMaybe<CandidateProcessHistoryItemPositionProfileInput>;
  /** The parties that executed the action. */
  primaryParties: Array<CandidateProcessPartyInput>;
  /**
   * The underlying source for the item.
   *
   * For example, items related to an application process would note the job board or other channel that sourced the application.
   *
   * This is required if `positionProfile` is specified.
   */
  seekSource?: InputMaybe<SeekProcessHistoryItemSourceInput>;
  /**
   * The current status of the underlying process.
   *
   * For example, a candidate in an application process may progress through a series of statuses like applied, interviewed, offered, hired.
   */
  status?: InputMaybe<CandidateProcessStatusInput>;
}

/** The input parameter for the `updatePositionOpeningPersonContacts` mutation. */
export interface UpdatePositionOpeningPersonContactsInput {
  /** The details of the position opening to be updated. */
  positionOpening: UpdatePositionOpeningPersonContactsPositionOpeningInput;
}

/** The response from the `updatePositionOpeningPersonContacts` mutation. */
export interface UpdatePositionOpeningPersonContactsPayload {
  __typename?: 'UpdatePositionOpeningPersonContactsPayload';
  /** The details of the updated position opening. */
  positionOpening: PositionOpening;
}

/** The details of the position opening to be updated. */
export interface UpdatePositionOpeningPersonContactsPositionOpeningInput {
  /** The identifier for the `PositionOpening` to be updated. */
  documentId: Scalars['String'];
  /**
   * Specific contact people for the position opening at the party.
   *
   * The name, email address & role of at least one contact person must be provided.
   * A maximum of 10 contact people may be provided.
   */
  personContacts: Array<SpecifiedPersonInput>;
}

/** The input parameter for the `updatePositionOpeningStatus` mutation. */
export interface UpdatePositionOpeningStatusInput {
  /** The details of the position opening to be updated. */
  positionOpening: UpdatePositionOpeningStatusPositionOpeningInput;
}

/** The response from the `updatePositionOpeningStatus` mutation. */
export interface UpdatePositionOpeningStatusPayload {
  __typename?: 'UpdatePositionOpeningStatusPayload';
  /** The details of the updated position opening. */
  positionOpening: PositionOpening;
}

/** The details of the position opening to have its status updated. */
export interface UpdatePositionOpeningStatusPositionOpeningInput {
  /** The identifier for the `PositionOpening` to be updated. */
  documentId: Scalars['String'];
  /**
   * The status of the position opening.
   *
   * Currently, three codes are defined:
   *
   * - `Incomplete` indicates the position opening is in a draft state.
   * - `Active` indicates the position opening is open.
   * - `Closed` indicates the position opening has been closed.
   */
  statusCode: Scalars['String'];
}

/** The input parameter for the `updatePostedPositionProfile` mutation. */
export interface UpdatePostedPositionProfileInput {
  /** The values to replace on a posted position profile. */
  positionProfile: UpdatePostedPositionProfilePositionProfileInput;
}

/** The output of the `updatePostedPositionProfile` mutation. */
export interface UpdatePostedPositionProfilePayload {
  __typename?: 'UpdatePostedPositionProfilePayload';
  /** Attributes of the updated position profile. */
  positionProfile: UpdatePostedPositionProfilePositionProfilePayload;
}

/** The values to replace on a posted position profile. */
export interface UpdatePostedPositionProfilePositionProfileInput {
  /**
   * An array of `JobCategory` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one identifier for a child job category.
   */
  jobCategories: Array<Scalars['String']>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackageInput;
  /** An array of formatted position profile descriptions. */
  positionFormattedDescriptions: Array<PositionFormattedDescriptionInput>;
  /**
   * An array of `Location` identifiers.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  positionLocation: Array<Scalars['String']>;
  /**
   * An array of identifiers for the `HiringOrganization`s that have the position.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element that matches the position opening's `PostingRequester.id`.
   */
  positionOrganizations: Array<Scalars['String']>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   *
   * Omit this field for the `seekAnz` scheme.
   */
  positionScheduleTypeCodes?: InputMaybe<Array<Scalars['String']>>;
  /**
   * A short phrase describing the position as it would be listed on a business card or in a company directory.
   *
   * This field has a maximum length of 80 characters.
   */
  positionTitle: Scalars['String'];
  /**
   * The instructions related to posting the job ad.
   *
   * Scheme requirements:
   *
   * - The `seekAnz` scheme requires exactly one element.
   */
  postingInstructions: Array<UpdatePostingInstructionInput>;
  /** The identifier for the posted `PositionProfile` to update. */
  profileId: Scalars['String'];
  /**
   * A SEEK ANZ work type code.
   *
   * For positions in `seekAnz` scheme, this field is used instead of `positionScheduleTypeCodes`.
   *
   * Currently, four codes are defined:
   *
   * - `Casual` indicates a casual position.
   * - `ContractTemp` indicates a fixed-length contract position.
   * - `FullTime` indicates a full-time position.
   * - `PartTime` indicates a part-time position.
   *
   * Scheme requirements:
   *
   * - This field is required for the `seekAnz` scheme.
   * - Omit this field for other schemes.
   */
  seekAnzWorkTypeCode?: InputMaybe<Scalars['String']>;
  /**
   * This field is deprecated and must be omitted from all inputs.
   *
   * Do not explicitly set to `null` or any other value.
   */
  seekApplicationQuestionnaireId?: InputMaybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * This appears on the invoice when SEEK bills the hirer for the job ad.
   *
   * This field has a maximum length of 50 characters.
   */
  seekBillingReference?: InputMaybe<Scalars['String']>;
  /**
   * An optional hirer-provided opaque job reference.
   *
   * This field has a maximum length of 50 characters.
   */
  seekHirerJobReference?: InputMaybe<Scalars['String']>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 characters.
   */
  seekPartnerMetadata?: InputMaybe<Scalars['String']>;
  /** The video to render within the job ad. */
  seekVideo?: InputMaybe<SeekVideoInput>;
}

/** Attributes of the updated position profile. */
export interface UpdatePostedPositionProfilePositionProfilePayload {
  __typename?: 'UpdatePostedPositionProfile_PositionProfilePayload';
  /** The identifier for the updated `PositionProfile`. */
  profileId: ObjectIdentifier;
}

/** Information about how to post a job ad and where to direct its candidate applications. */
export interface UpdatePostingInstructionInput {
  /**
   * An array of methods for applying to the position.
   *
   * If no methods are provided, SEEK's native apply form will be used to receive candidate applications.
   * Native applications will emit a `CandidateApplicationCreated` event that points to a `CandidateProfile` object.
   *
   * The application method of a job ad must not be changed once it has been posted.
   * Attempting to switch between link out and native apply when updating a job ad will fail with a `BAD_USER_INPUT` error or result in unexpected behaviour.
   * This field should only be used to update the `ApplicationMethod.applicationUri` of an existing link out job ad.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field is limited to a single element.
   *   Requests with more than 1 element will fail.
   */
  applicationMethods?: InputMaybe<Array<ApplicationMethodInput>>;
  /**
   * The identifier for the `AdvertisementBranding` to apply to the posted job ad.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme, this field's behavior is dependent on the `SeekAnzAdProductFeatures` of the product set in the `seekAnzAdvertisementType` field.
   *
   *   When the product's `SeekAnzAdProductFeatures.brandingIndicator` value is false, this field will be silently ignored.
   */
  brandingId?: InputMaybe<Scalars['String']>;
  /**
   * The end date of the posting.
   *
   * Scheme requirements:
   *
   * - For the `seekAnz` scheme this must be no more than 30 days after the job ad was initially posted.
   *
   *   If an end date is omitted, the job ad's existing end date will be preserved.
   */
  end?: InputMaybe<Scalars['DateTime']>;
  /** The identifier for the `AdvertisementProduct`. */
  seekAdvertisementProductId?: InputMaybe<Scalars['String']>;
  /**
   * A SEEK ANZ advertisement type code.
   *
   * Currently, three codes are defined:
   *
   * - `Classic` indicates a Classic job ad.
   * - `StandOut` indicates a StandOut job ad.
   * - `Premium` indicates a Premium job ad.
   *
   * Scheme requirements:
   *
   * - This field is required for the `seekAnz` scheme.
   * - Omit this field for other schemes.
   */
  seekAnzAdvertisementType?: InputMaybe<Scalars['String']>;
}

/** The input parameter for the `updateUnpostedPositionProfile` mutation. */
export interface UpdateUnpostedPositionProfileInput {
  /** An unposted profile of a position opening to update. */
  positionProfile: UpdateUnpostedPositionProfilePositionProfileInput;
}

/** The response from the `updateUnpostedPositionProfile` mutation. */
export interface UpdateUnpostedPositionProfilePayload {
  __typename?: 'UpdateUnpostedPositionProfilePayload';
  /** Attributes of the updated unposted position profile. */
  positionProfile: UnpostedPositionProfile;
}

/** An unposted profile of a position opening to update. */
export interface UpdateUnpostedPositionProfilePositionProfileInput {
  /**
   * An array of `JobCategory` identifiers.
   *
   * A maximum of 10 job categories may be provided.
   */
  jobCategories: Array<Scalars['String']>;
  /** The salary or compensation offered for the position. */
  offeredRemunerationPackage: RemunerationPackageInput;
  /**
   * An array of formatted position profile descriptions.
   *
   * A maximum of 10 formatted descriptions may be provided.
   */
  positionFormattedDescriptions: Array<PositionFormattedDescriptionInput>;
  /**
   * An array of `Location` identifiers.
   *
   * A maximum of 10 locations may be provided.
   */
  positionLocation: Array<Scalars['String']>;
  /**
   * An array of codes for the offered schedules for the position.
   *
   * Currently, two codes are defined:
   *
   * - `FullTime` indicates a full-time schedule.
   * - `PartTime` indicates a part-time schedule.
   */
  positionScheduleTypeCodes?: InputMaybe<Array<Scalars['String']>>;
  /**
   * A short phrase describing the position as it would be listed on a business card or in a company directory.
   *
   * This field has a maximum length of 80 characters.
   */
  positionTitle: Scalars['String'];
  /** The identifier for the unposted `PositionProfile` to update. */
  profileId: Scalars['String'];
  /**
   * A human-readable name given to the profile.
   *
   * This in addition to the `positionTitle` can help identify the profile to an end user.
   */
  profileName?: InputMaybe<Scalars['String']>;
  /**
   * An optional opaque billing reference.
   *
   * SEEK does not use this field on unposted position profiles.
   *
   * This field has a maximum length of 50 characters.
   */
  seekBillingReference?: InputMaybe<Scalars['String']>;
  /**
   * An optional hirer-provided opaque job reference.
   *
   * This field has a maximum length of 50 characters.
   */
  seekHirerJobReference?: InputMaybe<Scalars['String']>;
  /**
   * An optional field for storing additional data with a `PositionProfile`.
   *
   * The metadata is not used by SEEK and won't be seen by hirers or candidates.
   *
   * This field has a maximum length of 1,000 characters.
   */
  seekPartnerMetadata?: InputMaybe<Scalars['String']>;
}

/** The input parameter for the `updateUploadedCandidatePerson` mutation. */
export interface UpdateUploadedCandidatePersonInput {
  /** The details of the uploaded candidate to be updated. */
  candidate: UpdateUploadedCandidatePersonCandidateInput;
}

/** The response from the `updateUploadedCandidatePerson` mutation. */
export type UpdateUploadedCandidatePersonPayload =
  | UpdateUploadedCandidatePersonPayloadConflict
  | UpdateUploadedCandidatePersonPayloadSuccess;

/** The conflict result for the `updateUploadedCandidatePerson` mutation. */
export interface UpdateUploadedCandidatePersonPayloadConflict {
  __typename?: 'UpdateUploadedCandidatePersonPayload_Conflict';
  /** The details of the conflicting candidate. */
  conflictingCandidate: Candidate;
}

/** The success result for the `updateUploadedCandidatePerson` mutation. */
export interface UpdateUploadedCandidatePersonPayloadSuccess {
  __typename?: 'UpdateUploadedCandidatePersonPayload_Success';
  /** The details of the uploaded candidate that was updated. */
  candidate: Candidate;
}

/** The details of the uploaded candidate to be updated. */
export interface UpdateUploadedCandidatePersonCandidateInput {
  /** The identifier for the uploaded `Candidate` to be updated. */
  documentId: Scalars['String'];
  /**
   * The personal details of the uploaded candidate to be updated.
   *
   * At least one email address is required in `communication`,
   * and one of the provided values must match `seekPrimaryEmailAddress`.
   *
   * If no value is provided for physical addresses in `communication` it will be treated as an empty list and will remove any previously uploaded addresses.
   */
  person: CandidatePersonInput;
  /**
   * The candidate's primary email address.
   *
   * The value must match one of the candidate's email addresses.
   *
   * This field has a maximum length of 255 bytes in UTF-8 encoding.
   */
  seekPrimaryEmailAddress: Scalars['String'];
}

/** The input parameter for the `updateUploadedCandidateProfileActions` mutation. */
export interface UpdateUploadedCandidateProfileActionsInput {
  /** The details of the uploaded candidate profile to be updated. */
  candidateProfile: UpdateUploadedCandidateProfileActionsCandidateProfileInput;
}

/** The response from the `updateUploadedCandidateProfileActions` mutation. */
export interface UpdateUploadedCandidateProfileActionsPayload {
  __typename?: 'UpdateUploadedCandidateProfileActionsPayload';
  /**
   * The details of the uploaded candidate profile that was updated.
   *
   * The uploaded candidate is available in the `candidate` field.
   */
  candidateProfile: CandidateProfile;
}

/** The details of the uploaded candidate profile to be updated. */
export interface UpdateUploadedCandidateProfileActionsCandidateProfileInput {
  /** The identifier for the uploaded `CandidateProfile` to be updated. */
  profileId: Scalars['String'];
  /**
   * Any associated actions that can be performed on the candidate profile.
   *
   * Only one of each type of action is permitted for the candidate profile.
   * Currently, only a `ViewProfile` action type is defined to provide a URL to view the candidate's profile.
   */
  seekActions: Array<CandidateProcessActionInput>;
}

/** The input parameter for the `updateUploadedCandidateProfileDates` mutation. */
export interface UpdateUploadedCandidateProfileDatesInput {
  /** The details of the uploaded candidate profile to be updated. */
  candidateProfile: UpdateUploadedCandidateProfileDatesCandidateProfileInput;
}

/** The response from the `updateUploadedCandidateProfileDates` mutation. */
export interface UpdateUploadedCandidateProfileDatesPayload {
  __typename?: 'UpdateUploadedCandidateProfileDatesPayload';
  /**
   * The details of the uploaded candidate profile that was updated.
   *
   * The uploaded candidate is available in the `candidate` field.
   */
  candidateProfile: CandidateProfile;
}

/** The details of the uploaded candidate profile to be updated. */
export interface UpdateUploadedCandidateProfileDatesCandidateProfileInput {
  /**
   * When the candidate profile was first created in the partner system.
   *
   * Expects a RFC 3339 compliant date time.
   * Millisecond precision is optional, and set to 0 if not provided.
   */
  createDateTime: Scalars['DateTime'];
  /** The identifier for the uploaded `CandidateProfile` to be updated. */
  profileId: Scalars['String'];
  /**
   * When the candidate profile was last updated in the partner system.
   *
   * Expects a RFC 3339 compliant date time.
   * Millisecond precision is optional, and set to 0 if not provided.
   */
  updateDateTime: Scalars['DateTime'];
}

/** The input parameter for the `updateUploadedCandidateProfilePositionPreferences` mutation. */
export interface UpdateUploadedCandidateProfilePositionPreferencesInput {
  /** The details of the uploaded candidate profile to be updated. */
  candidateProfile: UpdateUploadedCandidateProfilePositionPreferencesCandidateProfileInput;
}

/** The response from the `updateUploadedCandidateProfilePositionPreferences` mutation. */
export interface UpdateUploadedCandidateProfilePositionPreferencesPayload {
  __typename?: 'UpdateUploadedCandidateProfilePositionPreferencesPayload';
  /**
   * The details of the uploaded candidate profile that was updated.
   *
   * The uploaded candidate is available in the `candidate` field.
   */
  candidateProfile: CandidateProfile;
}

/** The details of the uploaded candidate profile to be updated. */
export interface UpdateUploadedCandidateProfilePositionPreferencesCandidateProfileInput {
  /**
   * The candidate's preferences in an ideal position.
   *
   * `ProactiveSourcing` candidates may have 0–1 position preferences.
   */
  positionPreferences: Array<PositionPreferenceInput>;
  /** The identifier for the uploaded `CandidateProfile` to be updated. */
  profileId: Scalars['String'];
}

/** The input parameter for the `updateWebhookSubscriptionDeliveryConfiguration` mutation. */
export interface UpdateWebhookSubscriptionDeliveryConfigurationInput {
  /** The details of the webhook subscription to be updated. */
  webhookSubscription: UpdateWebhookSubscriptionDeliveryConfigurationSubscriptionInput;
}

/** The response from the `updateWebhookSubscriptionDeliveryConfiguration` mutation. */
export type UpdateWebhookSubscriptionDeliveryConfigurationPayload =
  | UpdateWebhookSubscriptionDeliveryConfigurationPayloadConflict
  | UpdateWebhookSubscriptionDeliveryConfigurationPayloadSuccess;

/**
 * The conflict result for the `updateWebhookSubscriptionDeliveryConfiguration` mutation.
 *
 * Webhook subscriptions must have a unique combination of `eventTypeCode`, `schemeId`, `url` & `hirerId` fields.
 * Attempting to update a webhook subscription to match an existing subscription will result in a conflict.
 */
export interface UpdateWebhookSubscriptionDeliveryConfigurationPayloadConflict {
  __typename?: 'UpdateWebhookSubscriptionDeliveryConfigurationPayload_Conflict';
  /** The details of the conflicting webhook subscription. */
  conflictingWebhookSubscription: WebhookSubscription;
}

/** The success result for the `updateWebhookSubscriptionDeliveryConfiguration` mutation. */
export interface UpdateWebhookSubscriptionDeliveryConfigurationPayloadSuccess {
  __typename?: 'UpdateWebhookSubscriptionDeliveryConfigurationPayload_Success';
  /** The details of the updated webhook subscription. */
  webhookSubscription: WebhookSubscription;
}

/** The details of the webhook subscription delivery configuration to be updated. */
export interface UpdateWebhookSubscriptionDeliveryConfigurationSubscriptionInput {
  /** The identifier for the `WebhookSubscription`. */
  id: Scalars['String'];
  /**
   * The maximum number of events that will be sent in each HTTP request.
   *
   * This number must be between 1 and 10 inclusive. Defaults to 10.
   */
  maxEventsPerAttempt?: InputMaybe<Scalars['Int']>;
  /** The subscriber-owned URL where events will be sent to. */
  url: Scalars['String'];
}

/** The input parameter for the `updateWebhookSubscriptionSigningConfiguration` mutation. */
export interface UpdateWebhookSubscriptionSigningConfigurationInput {
  /** The details of the webhook subscription to be updated. */
  webhookSubscription: UpdateWebhookSubscriptionSigningConfigurationSubscriptionInput;
}

/** The response from the `updateWebhookSubscriptionSigningConfiguration` mutation. */
export interface UpdateWebhookSubscriptionSigningConfigurationPayload {
  __typename?: 'UpdateWebhookSubscriptionSigningConfigurationPayload';
  /** The details of the updated webhook subscription. */
  webhookSubscription: WebhookSubscription;
}

/** The details of the webhook subscription signing configuration to be updated. */
export interface UpdateWebhookSubscriptionSigningConfigurationSubscriptionInput {
  /** The identifier for the `WebhookSubscription`. */
  id: Scalars['String'];
  /**
   * The secret for signing webhooks.
   *
   * This must be specified if `signingAlgorithmCode` is not `None`.
   * It is used as the key to generate a message authentication code for each request.
   *
   * The secret should be a random string with high entropy that is not reused for any other purpose.
   *
   * This field has a maximum length of 255 bytes in UTF-8 encoding.
   */
  secret?: InputMaybe<Scalars['String']>;
  /**
   * The algorithm for signing webhooks.
   *
   * Currently, two codes are defined:
   *
   * - `None` indicates no signature will be attached.
   * - `SeekHmacSha512` indicates a HMAC SHA-512 hex digest will be attached to each request as a `Seek-Signature` header.
   *
   * A webhook's signature can be used to validate that the request originated from SEEK.
   *
   * Use a constant-time algorithm to validate the signature.
   * Regular comparison methods like the `==` operator are susceptible to timing attacks.
   */
  signingAlgorithmCode: Scalars['String'];
}

/** The input parameter for the `uploadCandidate` mutation. */
export interface UploadCandidateInput {
  /** The details of the `Candidate` to be uploaded. */
  candidate: UploadCandidateCandidateInput;
  /** The details of the `CandidateProfile` to be uploaded. */
  candidateProfile: UploadCandidateCandidateProfileInput;
  /** The details of the `HiringOrganization` that submitted the candidate profile. */
  hiringOrganization: UploadCandidateHiringOrganizationInput;
}

/** The response from the `uploadCandidate` mutation. */
export type UploadCandidatePayload =
  | UploadCandidatePayloadConflict
  | UploadCandidatePayloadSuccess;

/** The conflict result for the `uploadCandidate` mutation. */
export interface UploadCandidatePayloadConflict {
  __typename?: 'UploadCandidatePayload_Conflict';
  /**
   * The details of the conflicting candidate.
   *
   * The conflicting candidate profile is available in the `profiles` field.
   */
  conflictingCandidate: Candidate;
  /** The details of the hiring organization that uploaded the candidate and their profile. */
  hiringOrganization: HiringOrganization;
}

/** The success result for the `uploadCandidate` mutation. */
export interface UploadCandidatePayloadSuccess {
  __typename?: 'UploadCandidatePayload_Success';
  /**
   * The details of the uploaded candidate.
   *
   * The uploaded candidate profile is available in the `profiles` field.
   */
  candidate: Candidate;
  /**
   * The details of the process history items uploaded alongside the candidate.
   *
   * The upload operation is atomic;
   * if you receive an `UploadCandidatePayload_Success` payload,
   * all process history items were successfully uploaded.
   * Input order is preserved to allow your software to record the `id` assigned to each item.
   */
  candidateProcessHistoryItems: Array<CandidateProcessHistoryItem>;
  /** The details of the hiring organization that uploaded the candidate and their profile. */
  hiringOrganization: HiringOrganization;
}

/** The details of the candidate to be uploaded. */
export interface UploadCandidateCandidateInput {
  /**
   * Instructions on how this candidate should be distributed.
   *
   * Currently, one product code is defined for uploaded candidates:
   *
   * - `ProactiveSourcing` indicates that the candidate may be viewed in SEEK Talent Search.
   */
  distributionGuidelines: DistributionGuidelinesInput;
  /**
   * The personal details of the candidate to be uploaded.
   *
   * At least one email address is required in `communication`,
   * and one of the provided values must match `seekPrimaryEmailAddress`.
   */
  person: CandidatePersonInput;
  /**
   * The candidate's primary email address.
   *
   * The value must match one of the candidate's email addresses.
   * Duplicate uploads will result in a `BAD_USER_INPUT` error.
   *
   * This field has a maximum length of 255 bytes in UTF-8 encoding.
   */
  seekPrimaryEmailAddress: Scalars['String'];
}

/** The details of the candidate profile to be uploaded. */
export interface UploadCandidateCandidateProfileInput {
  /**
   * When the candidate profile was first created in the partner system.
   *
   * Expects a RFC 3339 compliant date time.
   * Millisecond precision is optional, and set to 0 if not provided.
   */
  createDateTime: Scalars['DateTime'];
  /**
   * The candidate's preferences in an ideal position.
   *
   * `ProactiveSourcing` candidates may have 0–1 position preferences.
   */
  positionPreferences: Array<PositionPreferenceInput>;
  /**
   * Any associated actions that can be performed on the candidate profile.
   *
   * Only one of each type of action is permitted for the candidate profile.
   * Currently, only a `ViewProfile` action type is defined to provide a URL to view the candidate's profile.
   */
  seekActions: Array<CandidateProcessActionInput>;
  /**
   * The workflow process history of the candidate.
   *
   * A maximum of 20 process history items may be provided on initial upload.
   */
  seekProcessHistory: Array<CandidateProcessHistoryItemInput>;
  /**
   * When the candidate profile was last updated in the partner system.
   *
   * Expects a RFC 3339 compliant date time.
   * Millisecond precision is optional, and set to 0 if not provided.
   */
  updateDateTime: Scalars['DateTime'];
}

/** Details of the `HiringOrganization` that submitted the candidate profile. */
export interface UploadCandidateHiringOrganizationInput {
  /** The identifier for the `HiringOrganization` that submitted the candidate profile. */
  id: Scalars['String'];
}

/** An address of a human-accessible web page. */
export interface WebUrl {
  __typename?: 'WebUrl';
  /** The URL of the web page. */
  url: Scalars['String'];
}

/** An address of a human-accessible web page. */
export interface WebUrlInput {
  /** The URL of the web page. */
  url: Scalars['String'];
}

/** An attempt to deliver a specific `Event` to a `WebhookSubscription`. */
export interface WebhookAttempt {
  __typename?: 'WebhookAttempt';
  /** The date & time that the webhook attempt was acknowledged or timed out. */
  createDateTime: Scalars['DateTime'];
  /** The event that was attempted to be delivered. */
  event: Event;
  /** The identifier for the `WebhookAttempt`. */
  id: ObjectIdentifier;
  /** The HTTP request containing the webhook attempt. */
  webhookRequest: WebhookRequest;
  /**
   * The webhook subscription that was the target of the delivery attempt.
   *
   * This will be `null` if the subscription has since been deleted.
   */
  webhookSubscription?: Maybe<WebhookSubscription>;
}

/** A webhook attempt in a paginated list. */
export interface WebhookAttemptEdge {
  __typename?: 'WebhookAttemptEdge';
  /**
   * The opaque cursor to the webhook attempt.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual webhook attempt. */
  node: WebhookAttempt;
}

/** A page of webhook attempts. */
export interface WebhookAttemptsConnection {
  __typename?: 'WebhookAttemptsConnection';
  /** The page of webhook attempts and their corresponding cursors. */
  edges: Array<WebhookAttemptEdge>;
  /** The pagination metadata for this page of webhook attempts. */
  pageInfo: PageInfo;
}

/**
 * The criteria to filter webhook attempts by.
 *
 * These are `WebhookAttempt`-specific extensions on top of the standard pagination arguments `before`, `after`, `first` and `last`.
 */
export interface WebhookAttemptsFilterInput {
  /**
   * The creation date & time that resulting webhook attempts must succeed.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `WebhookAttemptsConnection`.
   */
  afterDateTime?: InputMaybe<Scalars['DateTime']>;
  /**
   * The creation date & time that resulting webhook attempts must precede.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `WebhookAttemptsConnection`.
   */
  beforeDateTime?: InputMaybe<Scalars['DateTime']>;
  /**
   * The high-level HTTP result of the webhook attempts to retrieve.
   *
   * See the `WebhookRequest.descriptionCode` documentation for a list of possible description codes.
   *
   * If this is not provided then all attempts will be returned regardless of their result.
   */
  descriptionCodes?: InputMaybe<Array<Scalars['String']>>;
}

/**
 * An HTTP request to a `WebhookSubscription`.
 *
 * HTTP requests are associated with one or more `WebhookAttempt`s representing each `Event` in the request body.
 */
export interface WebhookRequest {
  __typename?: 'WebhookRequest';
  /** The list of events that were attempted to be delivered in the request body. */
  attempts: Array<WebhookAttempt>;
  /**
   * The date & time the HTTP request occurred.
   *
   * This field has weak ordering guarantees, so it should not be used as a pagination argument.
   */
  createDateTime: Scalars['DateTime'];
  /**
   * The high-level description of the HTTP request's result.
   *
   * Currently, four codes are defined:
   *
   * - `BadResponse` indicates the subscription endpoint returned a non-2xx HTTP response.
   * - `InvalidUrl` indicates the subscription URL did not pass validation.
   * - `RequestTimeout` indicates the subscription endpoint took more than 10 seconds to respond.
   * - `Success` indicates the subscription endpoint returned a 2xx HTTP response.
   */
  descriptionCode: Scalars['String'];
  /**
   * The latency of the HTTP request in milliseconds.
   *
   * This will be `null` if the request wasn't made (i.e. an `InvalidUrl` error occurred).
   */
  latencyMs?: Maybe<Scalars['Int']>;
  /**
   * The identifier for the HTTP request.
   *
   * This is included in the request as an `X-Request-Id` custom header.
   */
  requestId: Scalars['String'];
  /**
   * The HTTP status code returned by the subscription endpoint.
   *
   * When an HTTP response wasn't received a synthetic status code will be generated:
   *
   * - For `InvalidUrl` the status code will be set to `400`.
   * - For `RequestTimeout` the status code will be set to `504`.
   */
  statusCode: Scalars['Int'];
  /**
   * The webhook subscription that was the target of the HTTP request.
   *
   * This will be `null` if the subscription has since been deleted.
   */
  webhookSubscription?: Maybe<WebhookSubscription>;
}

/** A webhook request in a paginated list. */
export interface WebhookRequestEdge {
  __typename?: 'WebhookRequestEdge';
  /**
   * The opaque cursor to the webhook request.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual webhook request. */
  node: WebhookRequest;
}

/**
 * The criteria to filter webhook requests by.
 *
 * These are `WebhookRequest`-specific extensions on top of the standard pagination arguments `before`, `after`, `first` and `last`.
 */
export interface WebhookRequestFilterInput {
  /**
   * The creation date & time that resulting webhook requests must succeed.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `WebhookRequestsConnection`.
   */
  afterDateTime?: InputMaybe<Scalars['DateTime']>;
  /**
   * The creation date & time that resulting webhook requests must precede.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `WebhookRequestsConnection`.
   */
  beforeDateTime?: InputMaybe<Scalars['DateTime']>;
  /**
   * The high-level HTTP result of the webhook requests to retrieve.
   *
   * See the `WebhookRequest.descriptionCode` documentation for a list of possible description codes.
   *
   * If this is not provided then all requests will be returned regardless of their result.
   */
  descriptionCodes?: InputMaybe<Array<Scalars['String']>>;
}

/** A page of webhook requests. */
export interface WebhookRequestsConnection {
  __typename?: 'WebhookRequestsConnection';
  /** The page of webhook requests and their corresponding cursors. */
  edges: Array<WebhookRequestEdge>;
  /** The pagination metadata for this page of webhook requests. */
  pageInfo: PageInfo;
}

/**
 * A subscription for a given event type and scheme to be delivered via webhook.
 *
 * Events are delivered in batches with a HTTP POST request to the specified subscription URL.
 */
export interface WebhookSubscription {
  __typename?: 'WebhookSubscription';
  /**
   * The date & time the webhook subscription was created.
   *
   * Initial `afterDateTime` and `beforeDateTime` filters apply to this field.
   */
  createDateTime: Scalars['DateTime'];
  /**
   * The type of event.
   *
   * See `Event` implementations for a list of supported values.
   */
  eventTypeCode: Scalars['String'];
  /**
   * The optional hirer associated with this webhook subscription.
   *
   * This will only be accessible if there is an active relationship between the partner and hirer.
   *
   * By default webhook subscriptions will send events from all hirers the partner has access to.
   * A non-null `hirer` field indicates that this subscription is filtered to a single hirer.
   */
  hirer?: Maybe<HiringOrganization>;
  /**
   * The optional hirer ID to receive events from.
   *
   * By default webhook subscriptions will send events from all hirers the partner has access to.
   * A non-null `hirerId` indicates that this subscription is filtered to a single hirer.
   */
  hirerId?: Maybe<ObjectIdentifier>;
  /** The identifier for the `WebhookSubscription`. */
  id: ObjectIdentifier;
  /**
   * The maximum number of events that will be sent in each HTTP request.
   *
   * This number is between 1 and 10 inclusive. Defaults to 10.
   */
  maxEventsPerAttempt: Scalars['Int'];
  /**
   * The data source for the event.
   *
   * Currently, only `seekAnz` and `seekAnzPublicTest` are supported.
   */
  schemeId: Scalars['String'];
  /**
   * The algorithm for signing webhooks.
   *
   * Currently, two codes are defined:
   *
   * - `None` indicates no signature will be attached.
   * - `SeekHmacSha512` indicates a HMAC SHA-512 hex digest will be attached to each request as a `Seek-Signature` header.
   *
   * A webhook's signature can be used to validate that the request originated from SEEK.
   *
   * Use a constant-time algorithm to validate the signature.
   * Regular comparison methods like the `==` operator are susceptible to timing attacks.
   */
  signingAlgorithmCode: Scalars['String'];
  /** The date & time the webhook subscription was last updated. */
  updateDateTime: Scalars['DateTime'];
  /** The subscriber-owned URL where events are sent to. */
  url: Scalars['String'];
  /**
   * A page of webhook requests for the subscription matching the specified criteria.
   *
   * A maximum of 100 webhook requests can be returned in a single page.
   * Additional webhook requests can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest known request if no pagination arguments are provided.
   */
  webhookRequests: WebhookRequestsConnection;
  /**
   * A page of replays for the current webhook subscription matching the specified criteria.
   *
   * A maximum of 100 webhook subscription replays can be returned in a single page.
   * Additional subscription replays can be queried using a pagination cursor.
   *
   * The result list is returned in ascending creation date & time order.
   * It starts from the earliest subscription replay if no pagination arguments are provided.
   */
  webhookSubscriptionReplays: WebhookSubscriptionReplaysConnection;
}

/**
 * A subscription for a given event type and scheme to be delivered via webhook.
 *
 * Events are delivered in batches with a HTTP POST request to the specified subscription URL.
 */
export interface WebhookSubscriptionWebhookRequestsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WebhookRequestFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}

/**
 * A subscription for a given event type and scheme to be delivered via webhook.
 *
 * Events are delivered in batches with a HTTP POST request to the specified subscription URL.
 */
export interface WebhookSubscriptionWebhookSubscriptionReplaysArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WebhookSubscriptionReplaysFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}

/** A webhook subscription in a paginated list. */
export interface WebhookSubscriptionEdge {
  __typename?: 'WebhookSubscriptionEdge';
  /**
   * The opaque cursor to the webhook subscription.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual webhook subscription. */
  node: WebhookSubscription;
}

/** The state of a request to replay events for a `WebhookSubscription`. */
export interface WebhookSubscriptionReplay {
  __typename?: 'WebhookSubscriptionReplay';
  /** The date & time that the webhook subscription replay was created. */
  createDateTime: Scalars['DateTime'];
  /** The identifier for the `WebhookSubscriptionReplay`. */
  id: ObjectIdentifier;
  /** The original request for the `WebhookSubscriptionReplay`. */
  request: WebhookSubscriptionReplayRequest;
  /**
   * The current status of the replay.
   *
   * Currently, the following status codes are defined:
   *
   * - `Submitted`
   * - `Running`
   * - `Completed`
   * - `Cancelled`
   */
  statusCode: Scalars['String'];
  /**
   * The date & time that the subscription replay was last updated.
   *
   * Subscription replays are updated whenever the replay makes forward progress.
   */
  updateDateTime: Scalars['DateTime'];
  /**
   * The webhook subscription that was the target of the replay.
   *
   * This will be `null` if the subscription has since been deleted.
   */
  webhookSubscription?: Maybe<WebhookSubscription>;
}

/** The event ID criteria used to determine which events will be replayed. */
export interface WebhookSubscriptionReplayByIdRequest
  extends WebhookSubscriptionReplayRequest {
  __typename?: 'WebhookSubscriptionReplayByIdRequest';
  /** The list of `Event.id` values to replay. */
  eventIds: Array<Scalars['String']>;
  /**
   * The type of the component.
   *
   * This is always `IdReplayRequest`.
   */
  typeCode: Scalars['String'];
}

/** The date range criteria used to determine which events will be replayed. */
export interface WebhookSubscriptionReplayByRangeRequest
  extends WebhookSubscriptionReplayRequest {
  __typename?: 'WebhookSubscriptionReplayByRangeRequest';
  /** The earliest event to include. */
  afterDateTime: Scalars['DateTime'];
  /** The latest event to include. */
  beforeDateTime: Scalars['DateTime'];
  /** The hirer to replay events for. */
  hirer?: Maybe<HiringOrganization>;
  /**
   * Whether previously delivered events should be included in the request.
   *
   * This also includes events that were not delivered because the relevant hirer relationship or webhook subscription was not in place at time of occurrence.
   */
  replayDeliveredEventsIndicator: Scalars['Boolean'];
  /**
   * The type of the component.
   *
   * This is always `RangeReplayRequest`.
   */
  typeCode: Scalars['String'];
}

/** A webhook subscription replay in a paginated list. */
export interface WebhookSubscriptionReplayEdge {
  __typename?: 'WebhookSubscriptionReplayEdge';
  /**
   * The opaque cursor to the webhook subscription replay.
   *
   * This can be used as a subsequent pagination argument.
   */
  cursor: Scalars['String'];
  /** The actual webhook subscription replay. */
  node: WebhookSubscriptionReplay;
}

/** The original criteria used to determine which events will be replayed. */
export interface WebhookSubscriptionReplayRequest {
  /**
   * The type of the replay.
   *
   * Currently, two codes are defined:
   *
   * - `RangeReplayRequest` which corresponds to the `WebhookSubscriptionReplayByRangeRequest` type.
   * - `IdReplayRequest` which corresponds to the `WebhookSubscriptionReplayByIdRequest` type.
   */
  typeCode: Scalars['String'];
}

/** A page of webhook subscription replays. */
export interface WebhookSubscriptionReplaysConnection {
  __typename?: 'WebhookSubscriptionReplaysConnection';
  /** The page of webhook subscription replays and their corresponding cursors. */
  edges: Array<WebhookSubscriptionReplayEdge>;
  /**
   * The pagination metadata for this page of webhook subscription replays.
   *
   * Disclaimer:
   * - The `hasPreviousPage` field will always be false when paginating by `first`.
   * - The `hasNextPage` field will always be false when paginating by `last`.
   *
   * To discern whether a next/previous page exists in these conditions, an additional request will need to be made to retrieve the next/previous page.
   */
  pageInfo: PageInfo;
}

/**
 * The criteria to filter webhook subscription replays by.
 *
 * These are `WebhookSubscriptionReplay`-specific extensions on top of the standard pagination arguments `before`, `after`, `first` and `last`.
 */
export interface WebhookSubscriptionReplaysFilterInput {
  /**
   * The replay status to filter by.
   *
   * See the `WebhookSubscriptionReplay.statusCode` documentation for a list of possible status codes.
   *
   * If this is not provided then replays of all statuses will be returned.
   */
  statusCode?: InputMaybe<Scalars['String']>;
}

/** A page of webhook subscriptions. */
export interface WebhookSubscriptionsConnection {
  __typename?: 'WebhookSubscriptionsConnection';
  /** The page of webhook subscriptions and their corresponding cursors. */
  edges: Array<WebhookSubscriptionEdge>;
  /** The pagination metadata for this page of subscriptions. */
  pageInfo: PageInfo;
}

/**
 * The criteria to filter webhook subscriptions by.
 *
 * These are `WebhookSubscription`-specific extensions on top of the standard pagination arguments `before`, `after`, `first` and `last`.
 */
export interface WebhookSubscriptionsFilterInput {
  /**
   * The creation date & time that resulting webhook subscriptions must succeed.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `WebhookSubscriptionsConnection`.
   */
  afterDateTime?: InputMaybe<Scalars['DateTime']>;
  /**
   * The creation date & time that resulting webhook subscriptions must precede.
   *
   * This can be used to initiate the retrieval of paginated results.
   * Subsequent queries should use the opaque cursors returned from `WebhookSubscriptionsConnection`.
   */
  beforeDateTime?: InputMaybe<Scalars['DateTime']>;
  /**
   * The event types of webhook subscriptions to retrieve.
   *
   * See `Event` implementations for a list of supported values.
   *
   * If this is not provided then events of all types will be returned.
   */
  eventTypeCodes?: InputMaybe<Array<Scalars['String']>>;
  /**
   * The hirer IDs of the hirer-filtered webhook subscriptions to retrieve.
   *
   * If this is not provided then both hirer-filtered and unfiltered subscriptions will be returned.
   */
  hirerIds?: InputMaybe<Array<Scalars['String']>>;
}

export type AdvertisementBrandingFieldsFragment = {
  __typename?: 'AdvertisementBranding';
  name: string;
  id: { __typename?: 'ObjectIdentifier'; value: string };
  images: Array<{
    __typename?: 'AdvertisementBrandingImage';
    typeCode: string;
    url: string;
  }>;
};

export type AdvertisementBrandingEdgeFieldsFragment = {
  __typename?: 'AdvertisementBrandingEdge';
  node: {
    __typename?: 'AdvertisementBranding';
    name: string;
    id: { __typename?: 'ObjectIdentifier'; value: string };
    images: Array<{
      __typename?: 'AdvertisementBrandingImage';
      typeCode: string;
      url: string;
    }>;
  };
};

export type AdvertisementBrandingsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  hirerId: Scalars['String'];
}>;

export type AdvertisementBrandingsQuery = {
  advertisementBrandings: {
    __typename?: 'AdvertisementBrandingsConnection';
    pageInfo: {
      __typename?: 'PageInfo';
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: string | null;
      endCursor?: string | null;
    };
    edges: Array<{
      __typename?: 'AdvertisementBrandingEdge';
      node: {
        __typename?: 'AdvertisementBranding';
        name: string;
        id: { __typename?: 'ObjectIdentifier'; value: string };
        images: Array<{
          __typename?: 'AdvertisementBrandingImage';
          typeCode: string;
          url: string;
        }>;
      };
    }>;
  };
};

export type JobCategoryFieldsFragment = {
  __typename?: 'JobCategory';
  name: string;
  id: { __typename?: 'ObjectIdentifier'; value: string };
};

export type JobCategoryQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type JobCategoryQuery = {
  jobCategory?: {
    __typename?: 'JobCategory';
    name: string;
    parent?: {
      __typename?: 'JobCategory';
      name: string;
      id: { __typename?: 'ObjectIdentifier'; value: string };
    } | null;
    children?: Array<{
      __typename?: 'JobCategory';
      name: string;
      id: { __typename?: 'ObjectIdentifier'; value: string };
    }> | null;
    id: { __typename?: 'ObjectIdentifier'; value: string };
  } | null;
};

export type JobCategoryAttributesFragment = {
  __typename?: 'JobCategory';
  name: string;
  id: { __typename?: 'ObjectIdentifier'; value: string };
};

export type JobCategoriesQueryVariables = Exact<{
  schemeId: Scalars['String'];
  positionProfile?: InputMaybe<JobCategoriesPositionProfileInput>;
}>;

export type JobCategoriesQuery = {
  jobCategories: Array<{
    __typename?: 'JobCategory';
    name: string;
    children?: Array<{
      __typename?: 'JobCategory';
      name: string;
      id: { __typename?: 'ObjectIdentifier'; value: string };
    }> | null;
    id: { __typename?: 'ObjectIdentifier'; value: string };
  }>;
};

export type JobCategorySuggestionChoiceAttributesFragment = {
  __typename?: 'JobCategorySuggestionChoice';
  confidence: number;
  jobCategory: {
    __typename?: 'JobCategory';
    name: string;
    parent?: {
      __typename?: 'JobCategory';
      name: string;
      id: { __typename?: 'ObjectIdentifier'; value: string };
    } | null;
    children?: Array<{
      __typename?: 'JobCategory';
      name: string;
      id: { __typename?: 'ObjectIdentifier'; value: string };
    }> | null;
    id: { __typename?: 'ObjectIdentifier'; value: string };
  };
};

export type JobCategorySuggestQueryVariables = Exact<{
  positionProfile: JobCategorySuggestionPositionProfileInput;
  schemeId: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
}>;

export type JobCategorySuggestQuery = {
  jobCategorySuggestions: Array<{
    __typename?: 'JobCategorySuggestionChoice';
    confidence: number;
    jobCategory: {
      __typename?: 'JobCategory';
      name: string;
      parent?: {
        __typename?: 'JobCategory';
        name: string;
        id: { __typename?: 'ObjectIdentifier'; value: string };
      } | null;
      children?: Array<{
        __typename?: 'JobCategory';
        name: string;
        id: { __typename?: 'ObjectIdentifier'; value: string };
      }> | null;
      id: { __typename?: 'ObjectIdentifier'; value: string };
    };
  }>;
};

export type LocationAttributesFragment = {
  __typename?: 'Location';
  name: string;
  contextualName: string;
  countryCode: string;
  id: { __typename?: 'ObjectIdentifier'; value: string };
  currencies: Array<{ __typename?: 'Currency'; code: string }>;
};

export type NestedLocationAttributesFragment = {
  __typename?: 'Location';
  name: string;
  contextualName: string;
  countryCode: string;
  parent?: {
    __typename?: 'Location';
    name: string;
    contextualName: string;
    countryCode: string;
    parent?: {
      __typename?: 'Location';
      name: string;
      contextualName: string;
      countryCode: string;
      parent?: {
        __typename?: 'Location';
        name: string;
        contextualName: string;
        countryCode: string;
        parent?: {
          __typename?: 'Location';
          name: string;
          contextualName: string;
          countryCode: string;
          parent?: {
            __typename?: 'Location';
            name: string;
            contextualName: string;
            countryCode: string;
            id: { __typename?: 'ObjectIdentifier'; value: string };
            currencies: Array<{ __typename?: 'Currency'; code: string }>;
          } | null;
          id: { __typename?: 'ObjectIdentifier'; value: string };
          currencies: Array<{ __typename?: 'Currency'; code: string }>;
        } | null;
        id: { __typename?: 'ObjectIdentifier'; value: string };
        currencies: Array<{ __typename?: 'Currency'; code: string }>;
      } | null;
      id: { __typename?: 'ObjectIdentifier'; value: string };
      currencies: Array<{ __typename?: 'Currency'; code: string }>;
    } | null;
    id: { __typename?: 'ObjectIdentifier'; value: string };
    currencies: Array<{ __typename?: 'Currency'; code: string }>;
  } | null;
  id: { __typename?: 'ObjectIdentifier'; value: string };
  currencies: Array<{ __typename?: 'Currency'; code: string }>;
};

export type NearbyLocationsQueryVariables = Exact<{
  geoLocation: GeoLocationInput;
  schemeId: Scalars['String'];
}>;

export type NearbyLocationsQuery = {
  nearestLocations?: Array<{
    __typename?: 'Location';
    name: string;
    contextualName: string;
    countryCode: string;
    parent?: {
      __typename?: 'Location';
      name: string;
      contextualName: string;
      countryCode: string;
      parent?: {
        __typename?: 'Location';
        name: string;
        contextualName: string;
        countryCode: string;
        parent?: {
          __typename?: 'Location';
          name: string;
          contextualName: string;
          countryCode: string;
          parent?: {
            __typename?: 'Location';
            name: string;
            contextualName: string;
            countryCode: string;
            parent?: {
              __typename?: 'Location';
              name: string;
              contextualName: string;
              countryCode: string;
              id: { __typename?: 'ObjectIdentifier'; value: string };
              currencies: Array<{ __typename?: 'Currency'; code: string }>;
            } | null;
            id: { __typename?: 'ObjectIdentifier'; value: string };
            currencies: Array<{ __typename?: 'Currency'; code: string }>;
          } | null;
          id: { __typename?: 'ObjectIdentifier'; value: string };
          currencies: Array<{ __typename?: 'Currency'; code: string }>;
        } | null;
        id: { __typename?: 'ObjectIdentifier'; value: string };
        currencies: Array<{ __typename?: 'Currency'; code: string }>;
      } | null;
      id: { __typename?: 'ObjectIdentifier'; value: string };
      currencies: Array<{ __typename?: 'Currency'; code: string }>;
    } | null;
    id: { __typename?: 'ObjectIdentifier'; value: string };
    currencies: Array<{ __typename?: 'Currency'; code: string }>;
  }> | null;
};

export type LocationQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type LocationQuery = {
  location?: {
    __typename?: 'Location';
    name: string;
    contextualName: string;
    countryCode: string;
    parent?: {
      __typename?: 'Location';
      name: string;
      contextualName: string;
      countryCode: string;
      parent?: {
        __typename?: 'Location';
        name: string;
        contextualName: string;
        countryCode: string;
        parent?: {
          __typename?: 'Location';
          name: string;
          contextualName: string;
          countryCode: string;
          parent?: {
            __typename?: 'Location';
            name: string;
            contextualName: string;
            countryCode: string;
            parent?: {
              __typename?: 'Location';
              name: string;
              contextualName: string;
              countryCode: string;
              id: { __typename?: 'ObjectIdentifier'; value: string };
              currencies: Array<{ __typename?: 'Currency'; code: string }>;
            } | null;
            id: { __typename?: 'ObjectIdentifier'; value: string };
            currencies: Array<{ __typename?: 'Currency'; code: string }>;
          } | null;
          id: { __typename?: 'ObjectIdentifier'; value: string };
          currencies: Array<{ __typename?: 'Currency'; code: string }>;
        } | null;
        id: { __typename?: 'ObjectIdentifier'; value: string };
        currencies: Array<{ __typename?: 'Currency'; code: string }>;
      } | null;
      id: { __typename?: 'ObjectIdentifier'; value: string };
      currencies: Array<{ __typename?: 'Currency'; code: string }>;
    } | null;
    id: { __typename?: 'ObjectIdentifier'; value: string };
    currencies: Array<{ __typename?: 'Currency'; code: string }>;
  } | null;
};

export type SuggestLocationsQueryVariables = Exact<{
  usageTypeCode: Scalars['String'];
  schemeId: Scalars['String'];
  hirerId?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
}>;

export type SuggestLocationsQuery = {
  locationSuggestions?: Array<{
    __typename?: 'LocationSuggestion';
    location: {
      __typename?: 'Location';
      name: string;
      contextualName: string;
      countryCode: string;
      parent?: {
        __typename?: 'Location';
        name: string;
        contextualName: string;
        countryCode: string;
        parent?: {
          __typename?: 'Location';
          name: string;
          contextualName: string;
          countryCode: string;
          parent?: {
            __typename?: 'Location';
            name: string;
            contextualName: string;
            countryCode: string;
            parent?: {
              __typename?: 'Location';
              name: string;
              contextualName: string;
              countryCode: string;
              parent?: {
                __typename?: 'Location';
                name: string;
                contextualName: string;
                countryCode: string;
                id: { __typename?: 'ObjectIdentifier'; value: string };
                currencies: Array<{ __typename?: 'Currency'; code: string }>;
              } | null;
              id: { __typename?: 'ObjectIdentifier'; value: string };
              currencies: Array<{ __typename?: 'Currency'; code: string }>;
            } | null;
            id: { __typename?: 'ObjectIdentifier'; value: string };
            currencies: Array<{ __typename?: 'Currency'; code: string }>;
          } | null;
          id: { __typename?: 'ObjectIdentifier'; value: string };
          currencies: Array<{ __typename?: 'Currency'; code: string }>;
        } | null;
        id: { __typename?: 'ObjectIdentifier'; value: string };
        currencies: Array<{ __typename?: 'Currency'; code: string }>;
      } | null;
      id: { __typename?: 'ObjectIdentifier'; value: string };
      currencies: Array<{ __typename?: 'Currency'; code: string }>;
    };
  }> | null;
};

export type NearestLocationsQueryVariables = Exact<{
  schemeId: Scalars['String'];
  geoLocation: GeoLocationInput;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type NearestLocationsQuery = {
  nearestLocations?: Array<{
    __typename?: 'Location';
    name: string;
    contextualName: string;
    countryCode: string;
    parent?: {
      __typename?: 'Location';
      name: string;
      contextualName: string;
      countryCode: string;
      parent?: {
        __typename?: 'Location';
        name: string;
        contextualName: string;
        countryCode: string;
        parent?: {
          __typename?: 'Location';
          name: string;
          contextualName: string;
          countryCode: string;
          parent?: {
            __typename?: 'Location';
            name: string;
            contextualName: string;
            countryCode: string;
            parent?: {
              __typename?: 'Location';
              name: string;
              contextualName: string;
              countryCode: string;
              id: { __typename?: 'ObjectIdentifier'; value: string };
              currencies: Array<{ __typename?: 'Currency'; code: string }>;
            } | null;
            id: { __typename?: 'ObjectIdentifier'; value: string };
            currencies: Array<{ __typename?: 'Currency'; code: string }>;
          } | null;
          id: { __typename?: 'ObjectIdentifier'; value: string };
          currencies: Array<{ __typename?: 'Currency'; code: string }>;
        } | null;
        id: { __typename?: 'ObjectIdentifier'; value: string };
        currencies: Array<{ __typename?: 'Currency'; code: string }>;
      } | null;
      id: { __typename?: 'ObjectIdentifier'; value: string };
      currencies: Array<{ __typename?: 'Currency'; code: string }>;
    } | null;
    id: { __typename?: 'ObjectIdentifier'; value: string };
    currencies: Array<{ __typename?: 'Currency'; code: string }>;
  }> | null;
};

export type PayTypesQueryVariables = Exact<{
  schemeId: Scalars['String'];
}>;

export type PayTypesQuery = {
  payTypes: Array<{
    __typename?: 'PayType';
    basisCode: string;
    intervalCode: string;
    label: string;
  }>;
};

export type CurrenciesQueryVariables = Exact<{
  usageTypeCode: Scalars['String'];
}>;

export type CurrenciesQuery = {
  currencies: Array<{ __typename?: 'Currency'; code: string }>;
};
