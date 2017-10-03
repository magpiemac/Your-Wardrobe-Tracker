require 'test_helper'

class WardrobeItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @wardrobe_item = wardrobe_items(:one)
  end

  test "should get index" do
    get wardrobe_items_url
    assert_response :success
  end

  test "should get new" do
    get new_wardrobe_item_url
    assert_response :success
  end

  test "should create wardrobe_item" do
    assert_difference('WardrobeItem.count') do
      post wardrobe_items_url, params: { wardrobe_item: {  } }
    end

    assert_redirected_to wardrobe_item_url(WardrobeItem.last)
  end

  test "should show wardrobe_item" do
    get wardrobe_item_url(@wardrobe_item)
    assert_response :success
  end

  test "should get edit" do
    get edit_wardrobe_item_url(@wardrobe_item)
    assert_response :success
  end

  test "should update wardrobe_item" do
    patch wardrobe_item_url(@wardrobe_item), params: { wardrobe_item: {  } }
    assert_redirected_to wardrobe_item_url(@wardrobe_item)
  end

  test "should destroy wardrobe_item" do
    assert_difference('WardrobeItem.count', -1) do
      delete wardrobe_item_url(@wardrobe_item)
    end

    assert_redirected_to wardrobe_items_url
  end
end
