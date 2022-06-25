/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { title, mediaURL, ingredients, instructions },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps }>
			<RichText.Content tagName="h1" value={ title } />

			{ mediaURL && (
				<img
					className="recipe-image"
					src={ mediaURL }
					alt={ __( 'Recipe Image', 'gutenberg-examples' ) }
				/>
			) }

			<h3>{ __( 'Ingredients', 'gutenberg-examples' ) }</h3>

			<RichText.Content
				tagName="ul"
				className="ingredients"
				value={ ingredients }
			/>

			<h3>{ __( 'Instructions', 'gutenberg-examples' ) }</h3>

			<div className="time">
				<div>
					<p className="time-title"> {__( 'Prep Time', 'gutenberg-examples' ) } </p>
					<p className="time-number"> {__( '15 mins', 'gutenberg-examples' ) }  </p>
				</div>
				<div>
					<p className="time-title"> { __( 'Cook Time', 'gutenberg-examples' ) } </p>
					<p className="time-number"> {__( '15 mins', 'gutenberg-examples' ) }  </p>
				</div>
				<div>
					<p className="time-title"> { __( 'Total Time', 'gutenberg-examples' ) } </p>
					<p className="time-number"> {__( '30 mins', 'gutenberg-examples' ) } </p>
				</div>
			</div>


			<RichText.Content
				tagName="div"
				className="steps"
				value={ instructions }
			/>
		</div>
	);
};

export default Save;
