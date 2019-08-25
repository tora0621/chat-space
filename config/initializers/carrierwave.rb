require 'carrierwave/storage/abstract'
# require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

if Rails.env.production?
  CarrierWave.configure do |config|

    case Rails.env
      when 'production'
      config.fog_credentials = {
      provider:                'AWS',
      aws_access_key_id: "your-aws-id",
      aws_secret_access_key: "your-secret-key",
      region:                  'your-region'
      }
        config.fog_directory = 'your-bucket-name'
        config.asset_host = 'your-bucket-url'

      when 'staging'
      config.fog_credentials = {
      provider:                'AWS',
      aws_access_key_id:       "your-secret-id",
      aws_secret_access_key:   "your-secret-key",
      region:                  'your-region'
    }
        config.fog_directory = 'your-secret-bucket-name'
        config.asset_host = 'your-buucket-url'
    end
  end
end