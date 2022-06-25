/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n';
 import { RichText, useBlockProps } from '@wordpress/block-editor';
 
 const Save = ( props ) => {
	 const {
		 attributes: { title, mediaURL, ingredients, instructions, time},
	 } = props;
 
	 const blockProps = useBlockProps.save();
 
	 return (
		 <div { ...blockProps }>
			 <RichText.Content tagName="h1" className="recipe-title" value={ title } />
 
			<div className="recipe-image">
				{ mediaURL && (
					<img
						src={ mediaURL }
						alt={ __( 'Recipe Image', 'gutenberg-examples' ) }
					/>
				) }
			</div>
 
			 <div className="post-recipe">
 
				 <div className="recipe-ingredients">
					 <h3>{ __( 'Ingredients', 'gutenberg-examples' ) }</h3>
					 <RichText.Content
						 tagName="ul"
						 className="ingredients"
						 value={ ingredients }
					 />
				 </div>
 
				 <div className="recipe-instructions">
					 <h3> { __('Instructions', 'gutenberg-examples' ) }</h3>
					 
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
						 tagName="ol" 
						 className="steps"
						 value={ instructions }
					 />
				 </div>
	 
			 </div>
 
		 </div>
	 );
 }; 
 
 export default Save;
 